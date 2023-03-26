import styled from 'styled-components'
import { colors } from './../../styles/themes/defaultTheme';

export const StyleButtonSave = styled.div`
  width: 100%;
  height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary.colorSecundary};
  font-size: 1rem;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.04);
  border: none;
  border-radius: .25rem;
  color: ${colors.colorBackground};
  font-weight: bolder;
  cursor: pointer;
  transition: background 0.2s ease-in;

  &:hover{
    background: ${colors.primary.colorLight}
  }

  &:active{
    background: ${colors.primary.colorPrimary}
  }


`