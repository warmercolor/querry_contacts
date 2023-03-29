import styled from "styled-components";
import { colors } from './../../styles/themes/defaultTheme';

export const StyleContacts = styled.section`
  .btn-logout{
    margin-top: 1.25rem;
    margin-left: 80%;
    align-content: flex-end;
    align-items: end;
    background-color: ${colors.primary.colorLight};
    font-size: 1rem;
    color: ${colors.primary.colorUltraLight};
    font-weight: bold;
    border: 2px solid ${colors.primary.colorPrimary};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;
  }
`