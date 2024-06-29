import { Schema, model } from 'mongoose'

export interface UserType {
  username: string
  password: string
  email: string
}

const UserSchema = new Schema<UserType>(
  {
    username: String,
    password: String,
    email: String
  },
  { versionKey: false }
)

const User = model('User', UserSchema)

export default User
