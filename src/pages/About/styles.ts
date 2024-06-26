import { styled } from 'styled-components'
import { ButtonContainer } from '../../components/Button/styles'

export const AboutContent = styled.div`
  p {
    font-size: 1rem;
    line-height: 22px;
    margin-bottom: 8px;
  }

  ${ButtonContainer} {
    margin-top: 32px;
  }

  .highlight {
    color: ${(props) => props.theme.contrastColor};
    font-weight: bold;
  }
`

export const SkillsList = styled.ul`
  margin-left: 16px;

  li {
    list-style: disc;
    font-size: 1rem;
    line-height: 22px;
  }
`
