import { Navigation } from '@components'
import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  children?: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <S.Wrapper>
      {children}
      <Navigation />
    </S.Wrapper>
  )
}

export default DefaultLayout
