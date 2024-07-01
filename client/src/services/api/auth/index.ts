import { AxiosResponse } from 'axios'
import API, { BASE_API, get, post } from '../api'
import { setAccessToken } from '../util'
import { UserType } from './types'
import { API_ROUTES } from '~/utils/constants'

const AuthAPI = {
  login: async (
    user: Omit<UserType, 'email'>
  ): Promise<[any, string[], AxiosResponse<{ accessToken: string }>]> => {
    let response: AxiosResponse<{ accessToken: string }>
    try {
      response = await BASE_API.post<unknown, AxiosResponse<{ accessToken: string }>>(
        API_ROUTES.AUTH.LOGIN,
        user
      )
      setAccessToken(response.data.accessToken)
      return [response.data, [], response]
    } catch (error: any) {
      const message = error?.response?.data?.error?.description
      // @ts-ignore
      return [null, [message], response]
    }
  },
  getUser: () => get<UserType>(API_ROUTES.AUTH.USER),
  signup: async (user: UserType) => post<UserType>(API_ROUTES.AUTH.SIGNUP, user),
  refreshToken: async () => {
    let response
    const data = []
    try {
      response = await BASE_API.get(API_ROUTES.AUTH.REFRESH)
      data.push(response.data.accessToken, null, response)
    } catch (error) {
      data.push(null, error, response)
    }

    return data
  },
  logout: () => API.post(API_ROUTES.AUTH.LOGOUT)
}

export default AuthAPI
