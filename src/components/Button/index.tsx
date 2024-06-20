import * as S from './styles'

type Props = {
  children: string
  onClick?: () => void
  title: string
  type: 'link' | 'button'
  href?: string
  target?: string
}

const Button = ({ children, onClick, title, type, href, target }: Props) => {
  return (
    <>
      {type === 'link' ? (
        <S.LinkContainer
          href={href}
          title={title}
          onClick={onClick}
          target={target}
        >
          {children}
        </S.LinkContainer>
      ) : (
        <S.ButtonContainer title={title} onClick={onClick}>
          {children}
        </S.ButtonContainer>
      )}
    </>
  )
}

export default Button
