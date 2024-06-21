import styled from 'styled-components'

export const SectionContainer = styled.section`
  margin: 32px auto;

  .content {
    max-width: 90%;
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme.contrastColor};
    margin-bottom: 32px;
  }
`
