import { RequestHandler } from 'express'
import User from '../models/user'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import { AppError } from '../util/appError'

interface RegisterType {
  username: string
  password: string
  email: string
}

export interface TypedRequestBody<T> extends Express.Request {
  body: T
}

export const registerHandler: RequestHandler<RegisterType> = async (
  req: TypedRequestBody<RegisterType>,
  res,
  next
) => {
  const { username, email, password } = req.body
  const existingUser = await User.findOne({
    $or: [
      {
        email
      },
      {
        username
      }
    ]
  })

  if (existingUser) {
    return res.status(404).json({
      message: 'User already exists.'
    })
  }

  const validation = validationResult(req)
  if (!validation.isEmpty()) {
    const err = new Error('User validation failed.')
    return next(err)
  }

  let encPassword: string
  let salt: string
  try {
    salt = await bcrypt.genSalt()
    encPassword = await bcrypt.hash(password, salt)
  } catch (err) {
    const error = new Error()
    return next(error)
  }

  const user = new User({ email, username, password: encPassword })

  const createdUser = await user.save()

  return res.status(201).json({
    message: 'User created.',
    user: createdUser
  })
}

interface LoginBodyType {
  username: string
  password: string
}

export const loginHandler: RequestHandler = async (
  req: TypedRequestBody<LoginBodyType>,
  res,
  next
) => {
  const validation = validationResult(req)
  if (!validation.isEmpty()) {
    const error = new Error('Invalid login input')
    return next(error)
  }

  const { username, password } = req.body

  const existingUser = await User.findOne({ username })
  if (!existingUser) {
    const error = new AppError('User not found.', 401, 'Invalid credentials.', true)
    return next(error)
  }

  const isValidPassword = await bcrypt.compare(password, existingUser.password)
  if (!isValidPassword) {
    const error = new Error('Invalid credentials.')
    return next(error)
  }

  let accessToken, refreshToken
  try {
    accessToken = jwt.sign(
      {
        username: existingUser.username
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1min'
      }
    )
    accessToken = jwt.sign(
      {
        username: existingUser.username
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '3min'
      }
    )
  } catch (error) {
    return next(new AppError('JWT Generation failed', 400, 'Something went wrong', true))
  }

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true
  })

  res.cookie('accessToken', accessToken)

  return res.json({
    accessToken
  })
}
