import styled from "styled-components";
import { colors } from './../../styles/themes/defaultTheme';

export const StyleLogin = styled.section`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;

  .form {
    position: relative;
    z-index: 1;
    background: ${colors.colorBackground};
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .login-form{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: ${colors.primary.colorSecundary};
  text-decoration: none;
}
`