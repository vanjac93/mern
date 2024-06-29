import Axios from 'axios'
import { AuthAPI2 } from '.'
import { getAccessToken, setAccessToken } from './util'

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
      const accessToken = await AuthAPI2.refreshToken()
      setAccessToken(accessToken)
      API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
      return API(originalRequest)
    }

    return Promise.reject(err)
  }
)

// export const get2 = async (url: string, options: AxiosRequestConfig = {}) => {
//   return request(url, { ...options, method: 'GET' })
// }

// export const delete2 = async (url: string, options: AxiosRequestConfig = {}) => {
//   return request(url, { ...options, method: 'DELETE' })
// }

// export const put2 = async (url: string, data: unknown, options: AxiosRequestConfig = {}) => {
//   return request(url, { ...options, method: 'PUT', body: data })
// }

// export const post2 = async (
//   url: string,
//   data: unknown,
//   options: AxiosRequestConfig<'POST'> = {}
// ) => {
//   return request(url, { ...options, method: 'POST', body: data })
// }

// export const patch2 = async (url: string, options: AxiosRequestConfig = {}) => {
//   return request(url, { ...options, method: 'PATCH' })
// }

// const request = async (url: string, options: AxiosRequestConfig = {}) => {
//   const responseData = []
//   let response
//   try {
//     console.log('options', options)
//     response = await API({ url, ...options })
//     responseData.push(response.data)
//   } catch (error) {
//     console.log('caught', error)
//     responseData.push(error)
//   }

//   responseData.push(response)

//   return responseData
// }

export default API
