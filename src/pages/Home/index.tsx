import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import * as S from './styles'
import { useEffect, useState } from 'react'

export type Technology = {
  tech: string
  icon: string
}

export type ProfileData = {
  name: string
  subtitle: string
  description: string
  technologies: Technology[]
  photo: string
}

const Home = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    subtitle: '',
    description: '',
    technologies: [],
    photo: ''
  })

  useEffect(() => {
    fetch('./data/profile.json')
      .then((res) => res.json())
      .then((data) => setProfile(data))
  }, [])

  return (
    <S.HomeContainer>
      <div className="container">
        <S.Content>
          <S.PerfilPhoto>
            <img src={profile.photo} alt={`Foto de ${profile.name}`} />
          </S.PerfilPhoto>
          <S.Salutation>Bem-vindo, meu nome é</S.Salutation>
          <S.Name>{profile.name}</S.Name>
          <S.Subtitle>{profile.subtitle}</S.Subtitle>
          <S.Description>{profile.description}</S.Description>
          <S.TechList>
            {profile.technologies.map((technology) => {
              return (
                <li key={technology.tech}>
                  <img src={technology.icon} alt={technology.tech} />
                </li>
              )
            })}
          </S.TechList>
          <Button
            title="Clique para acessar a seção 'Sobre mim'"
            type="button"
            onClick={() => navigate('/about')}
          >
            Conheça minha tragetória!
          </Button>
        </S.Content>
      </div>
    </S.HomeContainer>
  )
}

export default Home
