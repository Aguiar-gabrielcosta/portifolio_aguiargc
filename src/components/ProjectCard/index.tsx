import * as S from './style'

type Props = {
  image: string
  tags: string[]
  projectName: string
  description: string
  deployLink: string
  repoLink: string
}

const ProjectCard = ({
  image,
  tags,
  projectName,
  description,
  deployLink,
  repoLink
}: Props) => {
  return (
    <S.CardContainer>
      <img src={image} alt={projectName} />
      <S.Tags>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </S.Tags>
      <S.Content>
        <h2>{projectName}</h2>
        <p>{description}</p>
        <S.Links>
          <a href={deployLink} target="_blank" rel="noreferrer">
            Visite o projeto
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer">
            Repositório
          </a>
        </S.Links>
      </S.Content>
    </S.CardContainer>
  )
}

export default ProjectCard
