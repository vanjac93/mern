import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getAccessToken, setAccessToken } from './util'
import AuthAPI from './auth'

export const BASE_API = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const API = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

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
      const [accessToken, error, response] = await AuthAPI.refreshToken()
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
    return [null, [message], response as AxiosResponse]
  }
}

export default API
