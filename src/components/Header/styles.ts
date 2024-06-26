import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 16px 4px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    .container {
      display: block;
    }
  }
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Orbitron', sans-serif;
  }

  .responsive-menu {
    display: none;
    cursor: pointer;
    padding: 4px 6px;
    border: 1px solid ${(props) => props.theme.quaternaryColor};
    border-radius: 8px;

    &:hover {
      border-color: ${(props) => props.theme.contrastColor};
    }

    &:hover path {
      color: ${(props) => props.theme.contrastColor};
    }

    svg {
      display: block;
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    h1 {
      padding: 8px 8px 8px 8px;
    }

    .responsive-menu {
      display: block;
    }
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

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    ul {
      flex-direction: column;
      gap: 8px;
      display: none;
      margin: 16px 0;

      &.isOpen {
        display: flex;
      }
    }
  }
`

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px;
  transition: all 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.contrastColor};
    border: 1px solid ${(props) => props.theme.contrastColor};
    border-radius: 8px;
    transition: all 0.5s ease;
  }

  svg {
    fill: currentColor;
  }

  &.active {
    color: ${(props) => props.theme.contrastColor};
    border: 1px solid ${(props) => props.theme.contrastColor};
    border-radius: 8px;
  }

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    border-color: ${(props) => props.theme.quaternaryColor};
  }
`
