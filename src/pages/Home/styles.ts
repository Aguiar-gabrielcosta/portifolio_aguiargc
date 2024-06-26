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
  position: relative;
  width: 80%;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    width: 90%;
  }
`

export const Salutation = styled.p`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme.contrastColor};

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    font-size: 1rem;
  }
`

export const Name = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${(props) => props.theme.quaternaryColor};
  margin: 8px 0;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    font-size: 3rem;
  }

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    font-size: 2.5rem;
  }
`

export const Subtitle = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.terciaryColor};

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    font-size: 2rem;
  }

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    font-size: 1.5rem;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: ${(props) => props.theme.terciaryColor};
  margin: 16px 0 16px 0;
  max-width: 540px;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    max-width: 500px;
  }
`

export const TechList = styled.ul`
  display: flex;
  margin: 16px 0 40px 0;
  gap: 8px;

  li > img {
    height: 32px;
  }
`

export const PerfilPhoto = styled.div`
  position: absolute;
  right: 16px;
  top: 0px;

  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${(props) => props.theme.contrastColor};
  }

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    position: relative;
    display: flex;
    justify-content: center;

    img {
      margin: 16px auto;
    }
  }

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    right: 0;

    img {
      width: 120px;
      height: 120px;
    }
  }
`
