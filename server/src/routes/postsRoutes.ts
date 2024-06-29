import { Router } from 'express'
import { postGetHandler } from '../controllers/postController'
import { authMiddleware } from '../middleware/auth'

const postsRouter = Router()

postsRouter.get('/', authMiddleware, postGetHandler)

export default postsRouter
