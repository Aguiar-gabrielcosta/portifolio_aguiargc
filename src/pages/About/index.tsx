import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Section from '../../components/Section'
import * as S from './styles'

type AboutMeText = {
  aboutme: string[]
  skills: string[]
}

const About = () => {
  const [aboutText, setAboutText] = useState<AboutMeText>({
    aboutme: ['Carregando...'],
    skills: ['']
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
        <p className="highlight">
          As principais habilidades desenvolvidas durante minha tragetória
          foram:
        </p>
        <S.SkillsList>
          {aboutText.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </S.SkillsList>
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
