import { useState } from 'react'
import { Link } from 'react-router-dom'
import aboutIcon from '../../assets/about.svg'
import projectsIcon from '../../assets/projects.svg'
import contactIcon from '../../assets/contact.svg'
import * as S from './styles'
import Button from '../Button'
import CV from '/documents/CV_GabrielCosta.pdf'

const Header = () => {
  const [route, setRoute] = useState('')

  return (
    <S.HeaderContainer>
      <div className="container">
        <Link
          to={'/'}
          title="Clique e retorne à página inicial"
          onClick={() => setRoute('')}
        >
          <h1>👨🏻‍💻 Dev. Gabriel Aguiar</h1>
        </Link>
        <S.NavBar>
          <ul>
            <li>
              <S.LinkItem
                to={'/about'}
                title="Clique para mais informações sobre mim"
                className={route === 'about' ? 'active' : ''}
                onClick={() => setRoute('about')}
              >
                <img src={aboutIcon} alt="Sobre mim" />
                Sobre mim
              </S.LinkItem>
            </li>
            <li>
              <S.LinkItem
                to={'/projects'}
                title="Clique para ver sobre projetos que fiz"
                className={route === 'projects' ? 'active' : ''}
                onClick={() => setRoute('projects')}
              >
                <img src={projectsIcon} alt="Projetos" />
                Projetos
              </S.LinkItem>
            </li>
            <li>
              <S.LinkItem
                to={'/contact'}
                title="Clique para minhas informações de contato"
                className={route === 'contact' ? 'active' : ''}
                onClick={() => setRoute('contact')}
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
