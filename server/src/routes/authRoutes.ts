import { Router } from 'express'
import {
  postLogin,
  postSignup,
  getRefresh,
  getUser,
  postLogout
} from '../controllers/authController'
import { loginValidator, registerValidator } from './util'

const authRouter = Router()

authRouter.post('/signup', registerValidator, postSignup)
authRouter.post('/login', loginValidator, postLogin)
authRouter.get('/refresh', getRefresh)
authRouter.get('/user', getUser)
authRouter.post('/logout', postLogout)

export default authRouter
