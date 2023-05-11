import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  children?: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default DefaultLayout
