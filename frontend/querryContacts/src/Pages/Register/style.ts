import styled from "styled-components";
import { colors } from './../../styles/themes/defaultTheme';

export const StyleRegister = styled.section`
display: flex;
flex-direction: column;
gap: 30px;
text-align: center;
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

.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: ${colors.primary.colorSecundary};
  text-decoration: none;
}

.register-form{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media (max-width: 400px) {
  width: 100%;
}
`