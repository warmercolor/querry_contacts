import styled from 'styled-components'
import { colors } from './../../styles/themes/defaultTheme';

export const StyleList = styled.div`
  margin-top: 2rem;

  .sort-button{
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
  }
  .sort-span{
    color: ${colors.primary.colorPrimary};
    font-weight: bold;
    margin-right: .5rem;
    margin-left: 1.375rem;
    font-size: 1rem;
  }
  img{
    width: 20px;
    height: 20px;
  }
`

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