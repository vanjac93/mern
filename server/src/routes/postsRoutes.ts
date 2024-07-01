import { Router } from 'express'
import { authMiddleware } from '../middleware/auth'
import { getPosts } from '../controllers/postController'

const postsRouter = Router()

postsRouter.get('/', authMiddleware, getPosts)

export default postsRouter
