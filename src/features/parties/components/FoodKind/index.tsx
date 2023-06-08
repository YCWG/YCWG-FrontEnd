import styled from '@emotion/styled'
import { DetailedHTMLProps, SelectHTMLAttributes, forwardRef } from 'react'

interface Props
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {}

const Wrapper = styled.select`
  color: #aaaaaa;
  border: 1px solid #d9d9d9;
  padding: 0.5rem;
  border-radius: 0.5rem;
  outline: none;

  option:nth-of-type(1) {
    display: none;
  }
`

const FoodKind = forwardRef<HTMLSelectElement, Props>(({ ...props }, ref) => {
  return (
    <Wrapper ref={ref} defaultValue='DEFAULT' {...props}>
      <option value='DEFAULT' disabled>
        음식 종류
      </option>
      <option>한식</option>
      <option>중식</option>
      <option>일식</option>
    </Wrapper>
  )
})

FoodKind.displayName = 'FoodKind'

export default FoodKind
