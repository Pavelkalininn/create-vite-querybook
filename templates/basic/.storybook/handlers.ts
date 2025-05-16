import { http, HttpResponse } from 'msw'
import {
  user,
} from './mockConst'
const url: string = import.meta.env.VITE_API_URL

export const handlers = [
  http.get(`${url}/api/users/me/`, () => {
    return HttpResponse.json(user)
  }),
]
