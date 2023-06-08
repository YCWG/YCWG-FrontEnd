import api from '@api'

const createPartyApi = api.injectEndpoints({
  endpoints: (build) => ({
    uploadImg: build.mutation<{ url: string }, FormData>({
      query: (body) => ({
        headers: { 'Content-Type': 'multipart/form-data' },
        url: '/partylist/image',
        method: 'POST',
        body,
      }),
    }),
    createParty: build.mutation<void, Omit<Party, 'now_member'>>({
      query: (body) => ({
        url: '/partylist/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export default createPartyApi
