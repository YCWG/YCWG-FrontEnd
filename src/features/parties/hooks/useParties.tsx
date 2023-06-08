import api from '@api'

const useParties = () => {
  const { data } = api.useSetPartiesQuery()

  return { data }
}

export default useParties
