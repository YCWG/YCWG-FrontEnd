import * as SVG from '@assets/svg'
import { useLocation } from 'react-router-dom'
import * as S from './style'

const Navigation = () => {
  const location = useLocation()

  if (!['/my', '/', '/parties', '/parties/create'].includes(location.pathname))
    return null

  return (
    <S.Wrapper>
      <S.Tab to='/'>
        {location.pathname === '/' ? <SVG.PointFocus /> : <SVG.Point />}
        <S.TabTitle>내 주변</S.TabTitle>
      </S.Tab>
      <S.Tab to='/parties'>
        {location.pathname.includes('/parties') ? (
          <SVG.PeopleFocus />
        ) : (
          <SVG.People />
        )}
        <S.TabTitle>내 파티 리스트</S.TabTitle>
      </S.Tab>
      <S.Tab to='/my'>
        {location.pathname === '/my' ? (
          <SVG.UserCircleFocus />
        ) : (
          <SVG.UserCircle />
        )}
        <S.TabTitle>내 계정</S.TabTitle>
      </S.Tab>
    </S.Wrapper>
  )
}
export default Navigation
