import { AuthFormType } from '@features/auth/types'
import authApi from '@features/auth/services/auth'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const useAuth = () => {
  const { register, handleSubmit } = useForm<AuthFormType>()
  const navigate = useNavigate()
  const [login] = authApi.useLoginMutation()
  const [signup] = authApi.useRegisterMutation()

  const onSubmit = handleSubmit(async (form: AuthFormType) => {
    let data
    if (!form.nickname && !form.passwordConfirm) {
      data = await signup(form)
      if ('error' in data) return console.log(data.error)
    } else {
      data = await login(form)
      if ('error' in data) return console.log(data.error)
    }

    localStorage.setItem('access', data.data.access_token)

    navigate('/')
  })

  return { register, onSubmit }
}

export default useAuth
