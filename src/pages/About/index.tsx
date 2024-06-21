import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Section from '../../components/Section'
import * as S from './styles'

type AboutMeText = {
  aboutme: string[]
}

const About = () => {
  const [aboutText, setAboutText] = useState<AboutMeText>({
    aboutme: ['Carregando...']
  })
  const navigate = useNavigate()

  useEffect(() => {
    fetch('./data/about.json')
      .then((res) => res.json())
      .then((data) => setAboutText(data))
  }, [])

  return (
    <Section title="Sobre mim">
      <S.AboutContent>
        {aboutText.aboutme.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        <Button
          title="Clique para acessar a seção 'Projetos'"
          type="button"
          onClick={() => navigate('/projects')}
        >
          Veja meus principais projetos!
        </Button>
      </S.AboutContent>
    </Section>
  )
}

export default About
