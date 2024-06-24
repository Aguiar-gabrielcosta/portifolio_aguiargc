import styled from 'styled-components'

export const SectionContainer = styled.section`
  .content {
    max-width: 90%;
    width: 100%;
    margin: 32px auto;
  }

  h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme.contrastColor};
    margin-bottom: 32px;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  animation: 1.5s ease-in-out fadein;
`
