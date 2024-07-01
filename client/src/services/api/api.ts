import Axios, { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'
import { getAccessToken, setAccessToken } from './util'
import AuthAPI from './auth'
import i18n from '../i18n/i18n'

const API_CONFIG: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}

export const BASE_API = Axios.create(API_CONFIG)

const API = Axios.create(API_CONFIG)

API.interceptors.request.use(
  (req) => {
    const accessToken = getAccessToken()
    req.headers['Authorization'] = `Bearer ${accessToken}`
    return req
  },
  (err) => Promise.reject(err)
)

API.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config
    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const [accessToken] = await AuthAPI.refreshToken()
      setAccessToken(accessToken)
      API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
      return API(originalRequest)
    }

    return Promise.reject(err)
  }
)

export const put = async (url: string, data: unknown, options: AxiosRequestConfig = {}) => {
  // @ts-ignore
  return request(url, { ...options, method: 'PUT', body: data })
}

export async function post<T>(
  url: string,
  data: unknown,
  options: AxiosRequestConfig<'POST'> = {}
) {
  // @ts-ignore
  return request<T>(url, { ...options, method: 'POST', body: data })
}

export async function get<T>(url: string, options: AxiosRequestConfig = {}) {
  return request<T>(url, { ...options, method: 'GET' })
}

export async function destroy<T>(url: string, options: AxiosRequestConfig = {}) {
  return request<T>(url, { ...options, method: 'DELETE' })
}

export async function patch<T>(url: string, options: AxiosRequestConfig = {}) {
  return request<T>(url, { ...options, method: 'PATCH' })
}

type RequestReturnType<T> = Promise<[T | null, string[], AxiosResponse]>

async function request<T>(url: string, options: AxiosRequestConfig = {}): RequestReturnType<T> {
  let response
  try {
    response = await API({ url, ...options })
    return [response.data, [], response]
  } catch (error: any) {
    const message = error?.response?.data?.error?.description as string
    const messages = message ? [message] : []
    const noMessage = messages.length
    const status: HttpCode = error.request.status
    switch (status) {
      case 400:
        noMessage && messages.push(i18n.t('Bad request!'))
        break
      case 401:
        noMessage && messages.push(i18n.t('Unauthorized!'))
        break
      case 403:
        noMessage && messages.push(i18n.t('Forbidden!'))
        break
      case 404:
        noMessage && messages.push(i18n.t('Not found!'))
        break
      case 500:
        noMessage && messages.push(i18n.t('Internal server error!'))
        break
      default:
        noMessage && messages.push(i18n.t('Something went wrong!'))
    }

    return [null, messages, response as AxiosResponse]
  }
}

type HttpCode = 200 | 201 | 400 | 401 | 403 | 404 | 422 | 500

export default API
