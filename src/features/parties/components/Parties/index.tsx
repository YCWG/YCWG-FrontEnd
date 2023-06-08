import useParties from '@features/parties/hooks/useParties'
import { Party } from '@features/parties/components'
import * as S from './style'

const Parties = () => {
  const { data } = useParties()

  return (
    <S.Wrapper>
      {data?.map((party, idx) => (
        <Party key={idx} {...party} date={new Date(party.date)} />
      ))}
    </S.Wrapper>
  )
}

export default Parties
