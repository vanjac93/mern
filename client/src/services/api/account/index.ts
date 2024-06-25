import { post } from '../api'
import { setAccessToken } from '../util'

interface UserType {
  email: string
  password: string
  username: string
}

const AccountAPI = {
  login: async (user: Omit<UserType, 'email'>) => {
    const response = await post('/account/login', user)
    const [data] = response
    // @ts-ignore
    setAccessToken(data.accessToken as string)
    return response
  },
  signup: async (user: UserType) => post<UserType>('/account/signup', user)
}

export default AccountAPI
