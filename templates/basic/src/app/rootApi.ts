import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './rtkQueryConfig'

const baseUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'
export const rootApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth({ baseUrl: baseUrl + '/api/' }),
  endpoints: () => ({}),
})
