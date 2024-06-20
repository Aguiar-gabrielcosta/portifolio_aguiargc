import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import * as S from './styles'
import { useEffect, useState } from 'react'

type ProfileData = {
  name: string
  subtitle: string
  description: string
}

const Home = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    subtitle: '',
    description: ''
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
          <S.Salutation>Bem-vindo, meu nome é</S.Salutation>
          <S.Name>{profile.name}</S.Name>
          <S.Subtitle>{profile.subtitle}</S.Subtitle>
          <S.Description>{profile.description}</S.Description>
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
