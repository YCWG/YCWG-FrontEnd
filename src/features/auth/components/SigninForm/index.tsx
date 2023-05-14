import useAuth from '@features/auth/hooks/useAuth'
import { Input, Button } from '@components'
import * as S from './style'

const SigninForm = () => {
  const { onSubmit, register } = useAuth()

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.InputWrapper>
        <Input
          {...register('email', { required: true })}
          placeholder='이메일'
        />
        <Input
          {...register('password', { required: true })}
          placeholder='비밀번호'
        />
      </S.InputWrapper>
      <Button type='submit'>로그인</Button>
    </S.Wrapper>
  )
}

export default SigninForm
