import { FaRegUserCircle } from 'react-icons/fa'
import * as S from './style'
import { Party } from '@features/parties/components'

const UserPage = () => {
  return (
    <S.Wrapper>
      <S.Background>
        <S.User>
          <FaRegUserCircle size={120} />
        </S.User>
      </S.Background>
      <S.Name>변찬우</S.Name>
      <S.Description>
        광주에 서식하며 햄버거, 피자 같은 패스트푸드를 함께 먹는 것을
        좋아합니다! 금요일 7시에 지속적 파티 열어요 ~ !
      </S.Description>
      <S.Party>참여중인 파티</S.Party>

      <S.Parties>
        <Party
          title='묘미 분식에서 밥 드실분 ~'
          date={new Date('2023-06-14')}
          image='https://shorturl.at/djnrT'
          place='광주광역시 광산구 송정동 712번지 1층'
          category='분식'
          now_member={3}
          member_limit={10}
        />
      </S.Parties>
    </S.Wrapper>
  )
}

export default UserPage
