import useParties from '@features/parties/hooks/useParties'
import { Party } from '@features/parties/components'
import Title from '@components/Title'
import * as S from './style'

const Parties = () => {
  const { data } = useParties()

  return (
    <>
      {data?.length === 0 && <Title>파티가 없어</Title>}
      <S.Wrapper>
        {data?.map((party, idx) => (
          <Party key={idx} {...party} date={new Date(party.date)} />
        ))}
      </S.Wrapper>
    </>
  )
}

export default Parties
