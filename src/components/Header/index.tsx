import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  left?: ReactNode
  center?: ReactNode
  right?: ReactNode
}

const Header = ({ left, center, right }: Props) => {
  return (
    <S.Wrapper>
      <S.Left>{left}</S.Left>
      <S.Center>{center}</S.Center>
      <S.Right>{right}</S.Right>
    </S.Wrapper>
  )
}

export default Header
