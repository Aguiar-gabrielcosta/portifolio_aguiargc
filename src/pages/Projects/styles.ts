import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`
