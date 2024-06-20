import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.contrastColor};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.contrastColor};
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.quaternaryColor};
    border: 1px solid ${(props) => props.theme.quaternaryColor};
    transition: all 0.5s ease;
  }
`

export const LinkContainer = styled.a`
  border: 1px solid ${(props) => props.theme.contrastColor};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.contrastColor};
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.quaternaryColor};
    border: 1px solid ${(props) => props.theme.quaternaryColor};
    transition: all 0.5s ease;
  }
`
