import styled from "styled-components";
import { colors } from './../../styles/themes/defaultTheme';

export const StyleNewContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
    .input-mask{
      color: ${colors.colorGrey1};
      width: 100%;
      padding: 0.925rem ;
      border-radius: 4px;
      background-color: ${colors.colorWhite};
      border: none;
      outline: none;
      border: 2px solid ${colors.colorWhite};
      transition: border-color 0.2s ease-in;

      &:focus{
          border-color: ${colors.primary.colorSecundary};
        }
      }
      
    @media (max-width: 400px) {
    width: 100%;
    }
`