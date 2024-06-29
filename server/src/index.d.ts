import { UserType } from './models/user'

declare global {
  namespace Express {
    export interface Request {
      user?: UserType
    }
  }
}

export {}
