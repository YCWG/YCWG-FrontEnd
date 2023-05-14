import { Input, Button } from '@components'
import * as S from './style'

const SignupForm = () => {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Input placeholder='이메일' />
        <Input placeholder='비밀번호' />
      </S.InputWrapper>
      <Button type='submit'>로그인</Button>
    </S.Wrapper>
  )
}

export default SignupForm
