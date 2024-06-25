import { Router } from 'express'
import { loginHandler, registerHandler } from '../controllers/accountController'
import { loginValidator, registerValidator } from './util'

const accountRoutes = Router()

accountRoutes.post('/signup', registerValidator, registerHandler)
accountRoutes.post('/login', loginValidator, loginHandler)

export default accountRoutes
