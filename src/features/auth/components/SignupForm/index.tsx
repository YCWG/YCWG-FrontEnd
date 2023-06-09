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
          {...register('password2', { required: true })}
          placeholder='비밀번호 확인'
        />
        <Input
          {...register('username', { required: true })}
          placeholder='닉네임'
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <Button type='submit'>가입하기</Button>
        <S.Move to='/signin'>
          이미 계정이 있다면? <S.Bold>로그인하기</S.Bold>
        </S.Move>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default SignupForm
