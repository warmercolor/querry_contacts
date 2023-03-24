import { createGlobalStyle } from 'styled-components'
import { colors } from './themes/defaultTheme'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }
  body{
    background-color: ${colors.colorBackground};
    font-size: 1rem;
    min-height: 100vh;
  }

  button{
  cursor: pointer;
  border: none;
  }

  ul, ol, li{
  list-style: none;
  }

  a{
  text-decoration: none;
  }
`