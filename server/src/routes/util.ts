import { body } from 'express-validator'

export const registerValidator = [
  body('email').trim().isEmail(),
  body('username').trim().isLength({ min: 5 }),
  body('password').trim().isLength({ min: 8 })
]

export const loginValidator = [
  body('username').trim().isLength({ min: 5 }),
  body('password').trim().isLength({ min: 8 })
]
