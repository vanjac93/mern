import { get, post } from '../api'
import { setAccessToken } from '../util'

interface UserType {
  email: string
  password: string
  username: string
}

const AuthAPI = {
  login: async (user: Omit<UserType, 'email'>) => {
    const response = await post('/auth/login', user)
    const [data] = response
    // @ts-ignore
    setAccessToken(data.accessToken as string)
    return response
  },
  getUser: () => get('/auth'),
  signup: async (user: UserType) => post<UserType>('/auth/signup', user),
  refreshToken: () => post('/auth/refresh', {})
}

export default AuthAPI
