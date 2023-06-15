import api from '@api'

const createPartyApi = api.injectEndpoints({
  endpoints: (build) => ({
    uploadImg: build.mutation<{ image: string }, FormData>({
      query: (body) => ({
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
        url: '/partylist/image/',
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
