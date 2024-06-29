import API, { BASE_API, get, post } from '../api'
import { setAccessToken } from '../util'
import { UserType } from './types'

const AUTH_ROUTES = {
  LOGIN: '/auth/login',
  USER: '/auth/user',
  SIGNUP: '/auth/signup',
  REFRESH: '/auth/refresh',
  LOGOUT: '/auth/logout'
}

const AuthAPI = {
  login: async (user: Omit<UserType, 'email'>) => {
    const data = []
    let response
    try {
      response = await BASE_API.post(AUTH_ROUTES.LOGIN, user)
      setAccessToken(response.data)
      data.push(response.data, [], response)
    } catch (error: any) {
      const message = error?.response?.data?.error?.description
      data.push(null, [message], response)
    }

    return data
  },
  getUser: () => get<UserType>(AUTH_ROUTES.USER),
  signup: async (user: UserType) => post<UserType>(AUTH_ROUTES.SIGNUP, user),
  refreshToken: async () => {
    let response
    const data = []
    try {
      response = await BASE_API.get(AUTH_ROUTES.REFRESH)
      data.push(response.data.accessToken, null, response)
    } catch (error) {
      data.push(null, error, response)
    }

    return data
  },
  logout: () => API.post(AUTH_ROUTES.LOGOUT)
}

export default AuthAPI
