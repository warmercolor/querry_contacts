import styled from "styled-components";
import { colors } from './../../styles/themes/defaultTheme';

export const StyleDiv = styled.section`
  width: 100%;

    p{
      color: ${colors.colorGrey0};
    }

    span {
      color: ${colors.colorSoft};
    }
`

export const StyleInput = styled.section`
  width: 100%;
    margin-bottom: 0.625rem ;
    background-color: ${colors.colorWhite};
    border: none;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    align-items: center;


    input{
        color: ${colors.colorGrey1};
        width: 100%;
        padding: 0.925rem ;
        border-radius: 4px;
        background-color: ${colors.colorWhite};
        border: 2px solid ${colors.colorWhite};
        outline: none;
        transition: border-color 0.2s ease-in;

        &:focus{
          border-color: ${colors.primary.colorSecundary};
        }
    }

    @media (max-width: 400px) {
    width: 100%;
    }
`