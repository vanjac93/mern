import { RequestHandler } from 'express'
import { AppError } from '../util/appError'
import jwt from 'jsonwebtoken'
import User from '../models/user'

export const authMiddleware: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return next(new AppError('Unauthorized1', 401, 'Unauthoried to see endpoint', false))
  }

  const token = authHeader.split(' ')[1]
  let isVerified
  let username
  let decodedToken
  try {
    isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY)
    decodedToken = jwt.decode(token)
    username = decodedToken.username
  } catch (error) {
    return next(new AppError('Unauthorized2', 401, 'Unauthoried to see endpoint', false))
  }

  if (!username) {
    return next(new AppError('Unauthorized4', 401, 'Missing username from token', false))
  }

  if (isVerified) {
    const user = await User.findOne({ username })
    if (!user) {
      return next(new AppError('No user', 404, 'User not found.', false))
    }

    if (!req.user) {
      req.user = user
    }

    return next()
  } else {
    return next(new AppError('Unauthorized3', 401, 'Unauthoried to see endpoint', false))
  }
}
