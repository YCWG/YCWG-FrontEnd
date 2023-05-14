import useAuth from '@features/auth/hooks/useAuth'
import { Input, Button } from '@components'
import * as S from './style'

const SignupForm = () => {
  const { register, onSubmit } = useAuth()

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
        <Input
          {...register('passwordConfirm', { required: true })}
          placeholder='비밀번호 확인'
        />
        <Input
          {...register('nickname', { required: true })}
          placeholder='닉네임'
        />
      </S.InputWrapper>
      <Button type='submit'>로그인</Button>
    </S.Wrapper>
  )
}

export default SignupForm
