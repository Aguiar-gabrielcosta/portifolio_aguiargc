import aboutIcon from '../../assets/about.svg'
import projectsIcon from '../../assets/projects.svg'
import contactIcon from '../../assets/contact.svg'
import resumeIcon from '../../assets/resume.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <S.HeaderContainer>
      <div className="container">
        <Link to={'/'} title="Clique e retorne à página inicial">
          <h1>👨🏻‍💻 Dev. Gabriel Aguiar</h1>
        </Link>
        <S.NavBar>
          <ul>
            <li>
              <S.LinkItem
                to={'/about'}
                title="Clique para mais informações sobre mim"
              >
                <img src={aboutIcon} alt="Sobre mim" />
                Sobre mim
              </S.LinkItem>
            </li>
            <li>
              <S.LinkItem
                to={'/projects'}
                title="Clique para ver sobre projetos que fiz"
              >
                <img src={projectsIcon} alt="Projetos" />
                Projetos
              </S.LinkItem>
            </li>
            <li>
              <S.LinkItem
                to={'/contact'}
                title="Clique para minhas informações de contato"
              >
                <img src={contactIcon} alt="Contato" />
                Contato
              </S.LinkItem>
            </li>
            <li>
              <S.LinkItem
                to={'/resume'}
                title="Clique para baixar meu currículo"
              >
                <img src={resumeIcon} alt="Currículo" />
                Currículo
              </S.LinkItem>
            </li>
          </ul>
        </S.NavBar>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
