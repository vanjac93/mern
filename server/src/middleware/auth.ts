import { RequestHandler } from 'express'
import { AppError } from '../util/appError'
import jwt from 'jsonwebtoken'
import User from '../models/user'

export const authMiddleware: RequestHandler = async (req, res, next) => {
  // @ts-ignore
  console.log('auth middleware req.user', req.user)
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError('Unauthorized1', 401, 'Unauthoried to see endpoint', false)
  }

  const token = authHeader.split(' ')[1]
  let isVerified
  let username
  let decodedToken
  try {
    isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY)
    decodedToken = jwt.decode(token)
    username = decodedToken.usename
  } catch (error) {
    throw new AppError('Unauthorized2', 401, 'Unauthoried to see endpoint', false)
  }

  if (!username) {
    throw new AppError('Unauthorized4', 401, 'Missing username from token', false)
  }

  if (isVerified) {
    const user = await User.findOne({ username })
    console.log('got user', user)
    next()
  } else {
    throw new AppError('Unauthorized3', 401, 'Unauthoried to see endpoint', false)
  }
}
