import styled from 'styled-components'
import { colors } from '../../styles/themes/defaultTheme';

export const StyleLogo = styled.div`
  h1{
    font-size: 2.5rem;
    color: ${colors.colorBalck};
  }

  h1 > span{
    color: ${colors.primary.colorPrimary};
  }
`