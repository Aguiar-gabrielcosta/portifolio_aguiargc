import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.quaternaryColor};
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme.primaryColor};
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalStyle
