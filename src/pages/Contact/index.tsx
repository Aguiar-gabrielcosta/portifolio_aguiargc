import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Section from '../../components/Section'
import { SocialData } from '../../components/Footer'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import emailIcon from '../../assets/email.svg'
import whatsappIcon from '../../assets/whatsapp.svg'
import * as S from './styles'
import { ProfileData } from '../Home'

const Contact = () => {
  const [socialLinks, setSocialLinks] = useState<SocialData>({
    github: '#',
    linkedin: '#',
    email: '#',
    whatsapp: '#'
  })

  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    subtitle: '',
    description: '',
    technologies: [],
    photo: ''
  })

  useEffect(() => {
    fetch('./data/contact.json')
      .then((res) => res.json())
      .then((data) => setSocialLinks(data))
  }, [])

  useEffect(() => {
    fetch('./data/profile.json')
      .then((res) => res.json())
      .then((data) => setProfile(data))
  }, [])

  return (
    <Section title="Meus links e contato">
      <S.ContactContainer>
        <div className="content">
          <S.Profile>
            <img src={profile.photo} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>{profile.subtitle}</p>
          </S.Profile>
          <S.Links>
            <li>
              <Button
                type="link"
                href={socialLinks.github}
                target="_blank"
                title="Clique e acesse meu GitHub"
              >
                <>
                  <span>
                    <img src={githubIcon} alt="Icone GitHub" />
                  </span>
                  GitHub - Aguiar-gabrielcosta
                </>
              </Button>
            </li>
            <li>
              <Button
                type="link"
                href={socialLinks.linkedin}
                target="_blank"
                title="Clique e acesse meu LinkedIn"
              >
                <>
                  <span>
                    <img src={linkedinIcon} alt="Icone LinkedIn" />
                  </span>
                  LinkedIn - Gabriel Aguiar da Costa
                </>
              </Button>
            </li>
            <li>
              <Button
                type="link"
                href={`mailto:${socialLinks.email}`}
                target="_blank"
                title="Clique e me envie um E-mail"
              >
                <>
                  <span>
                    <img src={emailIcon} alt="Icone E-mail" />
                  </span>
                  E-mail - Aguiar.gc@hotmail.com
                </>
              </Button>
            </li>
            <li>
              <Button
                type="link"
                href={`https://wa.me/${socialLinks.whatsapp}`}
                target="_blank"
                title="Clique e entre em contato pelo Whatsapp"
              >
                <>
                  <span>
                    <img src={whatsappIcon} alt="Icone Whatsapp" />
                  </span>
                  Whatsapp - Gabriel Aguiar
                </>
              </Button>
            </li>
          </S.Links>
        </div>
      </S.ContactContainer>
    </Section>
  )
}

export default Contact
