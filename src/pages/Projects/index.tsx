import { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import Section from '../../components/Section'
import * as S from './styles'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

type Project = {
  projectName: string
  image: string
  tags: string[]
  description: string
  deployLink: string
  repoLink: string
}

type Projects = {
  projects: Project[]
}

const Projects = () => {
  const [projectsList, setProjectsList] = useState<Projects>()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('./data/projects.json')
      .then((res) => res.json())
      .then((data) => setProjectsList(data))
  }, [])

  return (
    <Section title="Meus projetos">
      <>
        <S.ProjectsContainer>
          {projectsList?.projects.map((project) => (
            <ProjectCard
              key={project.projectName}
              projectName={project.projectName}
              image={project.image}
              tags={project.tags}
              description={project.description}
              deployLink={project.deployLink}
              repoLink={project.repoLink}
            />
          ))}
          <ProjectCard
            image="https://placehold.co/300x300"
            projectName="Nome do Projeto"
            tags={['Tag 1', 'Tag 2']}
            description="lorem lorem lorem sfasfasfsfas sfa sadfasdfasfsafsa sfd asf asfdfasf sadfasf safaf"
            deployLink="#"
            repoLink="#"
          />
          <ProjectCard
            image="https://placehold.co/300x300"
            projectName="Nome do Projeto"
            tags={['Tag 1', 'Tag 2']}
            description="lorem lorem lorem sfasfasfsfas sfa sadfasdfasfsafsa sfd asf asfdfasf sadfasf safaf sdgsagasgsagasg gasgasg gagdsg asdgasdg asdgsagagagasdgsagsag asdgsa asgdasg sg sg sg asg sgagagasgsd gsgsgasg asgasdgas gsagsag ag"
            deployLink="#"
            repoLink="#"
          />
          <ProjectCard
            image="https://placehold.co/300x300"
            projectName="Nome do Projeto"
            tags={['Tag 1', 'Tag 2']}
            description="lorem lorem lorem sfasfasfsfas sfa sadfasdfasfsafsa sfd asf asfdfasf sadfasf safaf"
            deployLink="#"
            repoLink="#"
          />
          <ProjectCard
            image="https://placehold.co/300x300"
            projectName="Nome do Projeto"
            tags={['Tag 1', 'Tag 2']}
            description="lorem lorem lorem sfasfasfsfas sfa sadfasdfasfsafsa sfd asf asfdfasf sadfasf safaf"
            deployLink="#"
            repoLink="#"
          />
          <ProjectCard
            image="https://placehold.co/300x300"
            projectName="Nome do Projeto"
            tags={['Tag 1', 'Tag 2']}
            description="lorem lorem lorem sfasfasfsfas sfa sadfasdfasfsafsa sfd asf asfdfasf sadfasf safaf sdgsagasgsagasg gasgasg gagdsg asdgasdg asdgsagagagasdgsagsag asdgsa asgdasg sg sg sg asg sgagagasgsd gsgsgasg asgasdgas gsagsag ag"
            deployLink="#"
            repoLink="#"
          />
        </S.ProjectsContainer>
        <S.ButtonContainer>
          <Button
            title="Clique para acessar a seção 'Projetos'"
            type="button"
            onClick={() => navigate('/contact')}
          >
            Entre em contato!
          </Button>
        </S.ButtonContainer>
      </>
    </Section>
  )
}

export default Projects
