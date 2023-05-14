import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Move = styled(Link)`
  margin-top: 0.5rem;
  color: #42a5f5;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

export const Bold = styled.span`
  font-weight: 600;
`
