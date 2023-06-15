import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export const Background = styled.div`
  background: #42a5f5;
  height: 20vh;
  position: relative;
`

export const User = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -60px;
  display: inline-block;
  background: #f2f2f2;
  padding: 1rem;
  border-radius: 100%;
`

export const Name = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 4rem;
  text-align: center;
`

export const Description = styled.p`
  margin-top: 1rem;
  padding: 0 2rem;
  text-align: center;
`

export const Party = styled.h2`
  margin-top: 3rem;
  padding: 0 1rem;
  font-size: 1.5rem;
`

export const Parties = styled.div`
  padding: 0 1rem;
`
