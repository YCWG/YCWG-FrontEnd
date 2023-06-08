import styled from '@emotion/styled'
import { ReactNode } from 'react'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface Props {
  children: ReactNode
}

const PartiesLayout = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>
}

export default PartiesLayout
