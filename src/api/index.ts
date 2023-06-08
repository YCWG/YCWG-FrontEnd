import env from '@lib/env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_SERVER_URL,
    credentials: 'include',
    headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
  }),
  endpoints: (builder) => ({
    setParties: builder.query<Party[], void>({
      query: () => ({ url: '/partylist/', method: 'GET' }),
    }),
  }),
})

export default api
