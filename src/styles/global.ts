import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

body{
  display: flex;
  font-family: 'Montserrat', sans-serif
}

html, body{
  height: 100vh
}
`
