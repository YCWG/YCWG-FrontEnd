import api from '@api'

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    queryMe: build.query<{}, void>({
      query: () => ({ url: '/profile/', method: 'GET' }),
    }),
  }),
})

export default userApi
