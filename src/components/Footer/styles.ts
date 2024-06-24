import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 32px 0;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 30px;
  }

  li,
  a {
    display: inline-block;
    height: 30px;

    svg {
      height: 30px;
      width: 30px;
      fill: ${(props) => props.theme.quaternaryColor};
      transition: all 0.5s ease;

      path {
        fill: ${(props) => props.theme.quaternaryColor};
        transition: all 0.5s ease;
      }

      &:hover {
        fill: ${(props) => props.theme.contrastColor};
        transition: all 0.5s ease;

        path {
          fill: ${(props) => props.theme.contrastColor};
          transition: all 0.5s ease;
        }
      }
    }
  }
`
