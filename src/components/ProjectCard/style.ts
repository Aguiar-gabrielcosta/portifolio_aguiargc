import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.quaternaryColor};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 3px 6px 4px rgb(0, 0, 0, 0.3);

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`

export const Tags = styled.ul`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 8px;
  right: 8px;

  li {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.quaternaryColor};
    font-size: 0.875rem;
    padding: 4px;
    border-radius: 4px;
  }
`

export const Content = styled.div`
  padding: 8px;
  height: calc(100% - 200px);
  display: grid;
  grid-template-rows: auto 1fr auto;

  h2,
  p,
  a {
    color: ${(props) => props.theme.primaryColor};
  }

  h2 {
    font-size: 1.125rem;
  }

  p {
    margin: 8px 0 16px 0;
    font-size: 1rem;
    line-height: 22px;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  gap: 8px;

  a {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.quaternaryColor};
    font-size: 0.875rem;
    font-weight: bold;
    padding: 4px 6px;
    border-radius: 4px;
  }
`
