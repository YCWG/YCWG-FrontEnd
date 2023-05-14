import { Navigation } from '@components'
import { Outlet } from 'react-router-dom'
import * as S from './style'

const DefaultLayout = () => {
  return (
    <S.Wrapper>
      <Outlet />
      <Navigation />
    </S.Wrapper>
  )
}

export default DefaultLayout
