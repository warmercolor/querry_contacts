import styled from "styled-components";
import { colors } from './../../styles/themes/defaultTheme';

export const StyleHeaderContact = styled.section`
  margin-top: 4.625rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  a{
    margin-top: 1.25rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    span{
      color: ${colors.primary.colorPrimary};
      font-weight: bold;
      font-size: 1.1rem;
    }
    img{
    width: 20px;
    height: 20px;
    transform: rotate(-90deg);
    }
  }

  h2{
    font-size: 24px;
    font-weight: bolder;
  }
`