import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Content = styled.div`
  width: 80%;
`

export const Salutation = styled.p`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme.contrastColor};
`

export const Name = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${(props) => props.theme.quaternaryColor};
  margin: 8px 0;
`

export const Subtitle = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.terciaryColor};
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: ${(props) => props.theme.terciaryColor};
  margin: 16px 0 40px 0;
  max-width: 540px;
`
