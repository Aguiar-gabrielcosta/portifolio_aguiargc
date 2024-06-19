import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 16px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Orbitron', sans-serif;
  }
`

export const NavBar = styled.nav`
  ul {
    display: flex;
    gap: 16px;
  }

  img {
    height: 1.125rem;
    margin-right: 8px;
  }
`

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.contrastColor};
    text-decoration: underline;
    transition: all 0.5s ease;
  }

  svg {
    fill: currentColor;
  }
`
