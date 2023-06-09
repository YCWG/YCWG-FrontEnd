import api from '@api'
import { AuthFormType } from '@features/auth/types'

interface Response {
  refresh_token: string
  access_token: string
}

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Response, AuthFormType>({
      query: (body) => ({
        headers: { Authorization: undefined },
        url: '/api/auth/login/',
        method: 'POST',
        body,
      }),
    }),
    register: build.mutation<Response, AuthFormType>({
      query: (body) => ({
        headers: { Authorization: undefined },
        url: '/api/auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export default authApi
