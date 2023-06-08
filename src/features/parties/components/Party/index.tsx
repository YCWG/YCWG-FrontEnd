import * as S from './style'

interface Props extends Omit<Party, 'date' | 'isCompleted'> {
  date: Date
  isCompleted?: boolean
}

const Party = ({ title, image, place, date, member_limit }: Props) => {
  return (
    <S.Wrapper>
      <S.Image src={image} />
      <S.Content>
        <div>
          <S.Title>{title}</S.Title>
          <S.Position>{place}</S.Position>
        </div>
        <S.Date>{`${
          date.getMonth() + 1
        }월 ${date.getDate()}일 ${date.getHours()}시까지 진행 중`}</S.Date>
        <S.Title>{member_limit}명 모집중</S.Title>
      </S.Content>
    </S.Wrapper>
  )
}

export default Party
