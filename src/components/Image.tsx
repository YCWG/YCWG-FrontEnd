import * as SVG from '@assets/svg'
import styled from '@emotion/styled'
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react'

const Wrapper = styled.label`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  h3 {
    color: #d9d9d9;
  }
`

const ImagePreview = styled.img`
  max-width: 6.25rem;
  max-height: 6.25rem;
  object-fit: cover;
`

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Image = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setValue(URL.createObjectURL(e.target.files[0]))
    if (props.onChange) props.onChange(e)
  }

  return (
    <Wrapper>
      <input
        {...props}
        onChange={onChange}
        ref={ref}
        type='file'
        accept='*/image'
        hidden
      />
      {value ? (
        <ImagePreview src={value} />
      ) : (
        <>
          <SVG.Camera />
          <h3>이미지 삽입</h3>
        </>
      )}
    </Wrapper>
  )
})

Image.displayName = 'Image'

export default Image
