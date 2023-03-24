import styled from 'styled-components'
import { colors } from './../../styles/themes/defaultTheme';

export const StyleSearch = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  width: 100%;
  filter: drop-shadow(8px 4px 18px rgba(0, 0, 0, 0.04));

  input{
    width: 100%;
    border: none;
    outline: none;
    background-color: ${colors.colorWhite};
    border-radius: 1.5625rem;
    height: 3.625rem;
    padding: 0 1rem;
  }

  input::placeholder{
    color: ${colors.colorGrey1}
  }

  
`