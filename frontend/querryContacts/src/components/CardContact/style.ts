
import styled from 'styled-components';
import { colors } from './../../styles/themes/defaultTheme';

export const StyleCard = styled.div`
  margin-top: 1.25rem;
  background-color: ${colors.colorWhite};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .contact-name{
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  span{
    display: block;
    font-size: 14px;
    color: ${colors.colorGrey1};
  }

  .actions{
    display: flex;
    align-items: center;
    button{
      background-color: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`