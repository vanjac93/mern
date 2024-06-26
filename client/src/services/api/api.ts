import { t } from 'i18next'
import { getAccessToken } from './util'

export async function request<T>(
  url: string,
  options: RequestInit = {}
): Promise<[T | null, string[], Response]> {
  const errors = []
  const accessToken = getAccessToken()

  const response = await fetch(import.meta.env.VITE_API_URL + url, {
    headers: new Headers({
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }),
    credentials: 'include',
    ...options
  })

  const data = await response.json()
  // Handle errors
  if (!response.ok) {
    if (typeof data === 'object') {
      if (data.message) {
        errors.push(data.message)
      } else if (data.error) {
        console.log('data.error', data.error)
        errors.push(data.error?.description || t('Unkown API error'))
      }
      // if (response.status === 404) {
      //   !errors.length && errors.push(t('Not found!'))
      // } else if (response.status === 403) {
      //   !errors.length && errors.push(t('Access Forbidden!'))
      // } else if (response.status === 401) {
      //   console.log('unath')
      //   // const loginUrl = ENV.ROUTE_PREFIX + '/login'
      //   // // history.push(loginUrl)
      //   return [null, [], response]
      // } else if (response.status === 500) {
      //   !errors.length && errors.push(t('Internal server error!'))
      // } else if (response.status === 405) {
      //   !errors.length && errors.push(t('Method not allowed!'))
      // }
    }
    errors.length || errors.push(t('Unknown API Error.'))
  }

  return [data as T, errors, response]
}

export async function get<T>(
  url: string,
  options: RequestInit = {}
): Promise<[T | null, string[], Response]> {
  return request<T>(url, { ...options, method: 'GET' })
}

export async function destroy<T>(
  url: string,
  options: RequestInit = {}
): Promise<[T | null, string[], Response]> {
  return request<T>(url, { ...options, method: 'DELETE' })
}

export async function post<T>(
  url: string,
  data: unknown,
  options: RequestInit = {}
): Promise<[T | null, string[], Response]> {
  return request<T>(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data)
  })
}

export async function put<T>(
  url: string,
  data?: any,
  options: RequestInit = {}
): Promise<[T | null, string[], Response]> {
  return request<T>(url, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data)
  })
}

export async function patch<T>(
  url: string,
  data: any,
  options: RequestInit = {}
): Promise<[T | null, string[], Response]> {
  return request<T>(url, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(data)
  })
}
