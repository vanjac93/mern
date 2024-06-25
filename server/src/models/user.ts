import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    email: String
  },
  { versionKey: false }
)

const User = model('User', UserSchema)

export default User
