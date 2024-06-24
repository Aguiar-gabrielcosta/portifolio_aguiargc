import { styled } from 'styled-components'

export const ContactContainer = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.darkContrastColor};
    border-radius: 8px;
    width: 375px;
    padding: 16px;
    gap: 24px;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    height: 88px;
    width: 88px;
    object-fit: cover;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 4px;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.terciaryColor};
  }
`

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  img {
    height: 30px;
    margin-right: 8px;
  }
`
