import * as S from './styles'

type Props = {
  title: string
  children: JSX.Element
}

const Section = ({ title, children }: Props) => {
  return (
    <S.SectionContainer className="container">
      <div className="content">
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </S.SectionContainer>
  )
}

export default Section
