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