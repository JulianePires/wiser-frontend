import styled from 'styled-components'

export const Container = styled.div.attrs(() =>({}))`
  background: url('https://julianepires.myscriptcase.com:2083/cpsess9336537578/viewer/home%2fjulianep%2fpublic_html%2fimagens/backgroundImage.png');
  background-size: cover;
  background-position: center;
`

export const Cover = styled.div.attrs(() =>({}))`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  transform: rotate(-180deg);
`