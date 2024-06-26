import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import aboutIcon from '../../assets/about.svg'
import projectsIcon from '../../assets/projects.svg'
import contactIcon from '../../assets/contact.svg'
import * as S from './styles'
import Button from '../Button'
import CV from '/documents/CV_GabrielCosta.pdf'

const Header = () => {
  const [route, setRoute] = useState('/')
  const location = useLocation()
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    setRoute(location.pathname)
  }, [location])

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.Heading>
          <Link to={'/'} title="Clique e retorne à página inicial">
            <h1>👨🏻‍💻 Dev. Gabriel Aguiar</h1>
          </Link>
          <span
            className="responsive-menu"
            onClick={() => (openMenu ? setOpenMenu(false) : setOpenMenu(true))}
          >
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7L4 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 12L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 17L4 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </S.Heading>
        <S.NavBar>
          <ul className={openMenu ? 'isOpen' : ''}>
            <li>
              <S.LinkItem
                to={'/about'}
                title="Clique para mais informações sobre mim"
                className={route === '/about' ? 'active' : ''}
              >
                <img src={aboutIcon} alt="Sobre mim" />
                Sobre mim
              </S.LinkItem>
            </li>
            <li>
              <S.LinkItem
                to={'/projects'}
                title="Clique para ver sobre projetos que fiz"
                className={route === '/projects' ? 'active' : ''}
              >
                <img src={projectsIcon} alt="Projetos" />
                Projetos
              </S.LinkItem>
            </li>
            <li>
              <S.LinkItem
                to={'/contact'}
                title="Clique para minhas informações de contato"
                className={route === '/contact' ? 'active' : ''}
              >
                <img src={contactIcon} alt="Contato" />
                Contato
              </S.LinkItem>
            </li>
            <li>
              <Button
                type="link"
                title="Clique para baixar meu currículo"
                href={CV}
                target="_blank"
              >
                Currículo
              </Button>
            </li>
          </ul>
        </S.NavBar>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
