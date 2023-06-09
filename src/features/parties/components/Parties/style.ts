import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;

  & > div:nth-of-type(2n + 1) {
    border-bottom: 1px solid #b1b1b1;
  }
`

export const NoneParty = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
`
