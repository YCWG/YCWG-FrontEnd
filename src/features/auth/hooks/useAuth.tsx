import { AuthFormType } from '@features/auth/types'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const useAuth = () => {
  const { register, handleSubmit } = useForm<AuthFormType>()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (form: AuthFormType) => {
    if (!form.nickname && !form.passwordConfirm) return console.log(form)
    console.log(form)

    navigate('/')
  })

  return { register, onSubmit }
}

export default useAuth
