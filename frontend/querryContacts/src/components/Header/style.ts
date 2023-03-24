import styled from "styled-components";
import { colors } from './../../styles/themes/defaultTheme';

export const StyleHeader = styled.header`
  margin-top: 4.625rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .newContact{
    margin-top: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }
  .count{
    color: ${colors.colorGrey4};
    font-size: 1.5rem;
  }
  .btn{
    font-size: 1rem;
    color: ${colors.primary.colorPrimary};
    font-weight: bold;
    border: 2px solid ${colors.primary.colorPrimary};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover{
      background-color: ${colors.primary.colorPrimary};
      color: ${colors.colorBackground};
    }
  }

`