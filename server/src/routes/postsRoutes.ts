import { RequestHandler, Router } from 'express'
import { postGetHandler } from '../controllers/postController'
import { AppError } from '../util/appError'
import jwt from 'jsonwebtoken'

const postsRouter = Router()

const authHandler: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError('Unauthorized1', 401, 'Unauthoried to see endpoint', false)
  }

  const token = authHeader.split(' ')[1]
  let isVerified
  try {
    isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY)
  } catch (error) {
    throw new AppError('Unauthorized2', 401, 'Unauthoried to see endpoint', false)
  }

  console.log('verified', isVerified)
  if (isVerified) {
    next()
  } else {
    throw new AppError('Unauthorized3', 401, 'Unauthoried to see endpoint', false)
  }
}

postsRouter.get('/', authHandler, postGetHandler)

export default postsRouter
