import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  display: inline;
  font-weight: 600;
  font-size: 0.8rem;
  color: white;
  background: #42a5f5;
  padding: 0.7rem 1rem;
  border-radius: 3rem;
  position: absolute;
  bottom: 7rem;
  right: 1rem;
  text-decoration: none;
`

const GatherPartyChip = () => {
  return <Wrapper to='/parties/create'>밥 파티 모집</Wrapper>
}

export default GatherPartyChip
