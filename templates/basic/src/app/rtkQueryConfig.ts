import type {
  BaseQueryApi,
  BaseQueryFn,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import axios, { AxiosHeaders } from 'axios'
import type { AxiosRequestConfig, AxiosError } from 'axios'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()
const baseUrl: string = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export function axiosBaseQuery(): BaseQueryFn<
  {
    url: string
    method?: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
    headers?: AxiosRequestConfig['headers']
  },
  BaseQueryApi,
  any
> {
  return async ({ url, method, data, params, headers }) => {
    const token = localStorage.getItem('token')
    const authorization = token
      ? { Authorization: `Bearer ${token}` }
      : { Authorization: '' }

    try {
      const result = await axios({
        url: baseUrl + '/api/' + url,
        method,
        data,
        params,
        headers: new AxiosHeaders({
          ...headers,
          ...authorization,
          'Content-Type': 'application/json',
        }),
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data ?? err.message,
        },
      }
    }
  }
}

const baseQuery: BaseQueryFn<
  {
    url: string
    method?: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
    headers?: AxiosRequestConfig['headers']
  },
  BaseQueryApi,
  FetchBaseQueryError
> = axiosBaseQuery()

export function baseQueryWithReauth({ baseUrl }: { baseUrl: string }): BaseQueryFn<
  {
    url: string
    method?: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
    headers?: AxiosRequestConfig['headers']
  },
  BaseQueryApi,
  FetchBaseQueryError
> {
  return async (args, api, extraOptions) => {
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)
    if (result.error?.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire()
        try {
          const refreshResult = await baseQuery(
            {
              url: baseUrl + 'token/refresh/',
              method: 'POST',
              data: JSON.stringify({
                refresh: localStorage.getItem('refresh'),
              }),
            },
            api,
            extraOptions,
          )
          const data = refreshResult.data as
            | { access: string; refresh: string }
            | undefined
          if (data?.access) {
            localStorage.setItem('token', data.access)
            result = await baseQuery(args, api, extraOptions)
          } else {
            localStorage.removeItem('token')
            localStorage.removeItem('refresh')
            if (window.location.pathname !== '/login') {
              window.location.reload()
            }
          }
        } finally {
          release()
        }
      } else {
        await mutex.waitForUnlock()
        result = await baseQuery(args, api, extraOptions)
      }
    }
    return result
  }
}
