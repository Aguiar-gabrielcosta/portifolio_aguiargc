import { ThemeProvider } from 'styled-components'
import defaultTheme from './themes/defaultTheme'
import GlobalStyle from './styles'
import Router from './routes'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <main>
          <Router />
        </main>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
