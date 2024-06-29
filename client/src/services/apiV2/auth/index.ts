import API, { BASE_API } from '../api'
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
    try {
      const response = await BASE_API.post(AUTH_ROUTES.LOGIN, user)
      setAccessToken(response.data)
      data.push(response.data)
    } catch (error) {
      data.push(null, error)
    }

    return data
  },
  getUser: () => API.get(AUTH_ROUTES.USER),
  signup: async (user: UserType) => API.post<UserType>(AUTH_ROUTES.SIGNUP, user),
  refreshToken: async () => {
    let accessToken
    try {
      const response = await BASE_API.get(AUTH_ROUTES.REFRESH)
      accessToken = response.data.accessToken
    } catch (error) {
      console.log('refresh caught', error)
    }

    return accessToken
  },
  logout: () => API.post(AUTH_ROUTES.LOGOUT)
}

export default AuthAPI
