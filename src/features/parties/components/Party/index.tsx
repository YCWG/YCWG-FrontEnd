import * as S from './style'

interface Props extends Omit<Party, 'date' | 'isCompleted'> {
  date: Date
  isCompleted?: boolean
}

const Party = ({ title, imgUrl, pos, date, peopleNum }: Props) => {
  return (
    <S.Wrapper>
      <S.Image src={imgUrl} />
      <S.Content>
        <div>
          <S.Title>{title}</S.Title>
          <S.Position>{pos}</S.Position>
        </div>
        <S.Date>{`${
          date.getMonth() + 1
        }월 ${date.getDate()}일 ${date.getHours()}시까지 진행 중`}</S.Date>
        <S.Title>{peopleNum}명 모집중</S.Title>
      </S.Content>
    </S.Wrapper>
  )
}

export default Party
