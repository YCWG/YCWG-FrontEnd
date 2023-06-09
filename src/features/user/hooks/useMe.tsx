import userApi from '@features/user/services/userApi'

const useMe = () => {
  const { data } = userApi.useQueryMeQuery()

  return { data }
}

export default useMe
