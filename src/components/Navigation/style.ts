import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  border-top: 1px solid #b1b1b1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Tab = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: #000;
`

export const TabTitle = styled.p``
