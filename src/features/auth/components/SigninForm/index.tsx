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
      <S.ButtonWrapper>
        <Button type='submit'>로그인</Button>
        <S.Move to='/signup'>
          계정이 없다면? <S.Bold>회원가입하기</S.Bold>
        </S.Move>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default SigninForm
