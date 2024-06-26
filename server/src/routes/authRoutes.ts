import { Router } from 'express'
import { loginHandler, registerHandler } from '../controllers/accountController'
import { loginValidator, registerValidator } from './util'

const authRouter = Router()

authRouter.post('/signup', registerValidator, registerHandler)
authRouter.post('/login', loginValidator, loginHandler)

export default authRouter
