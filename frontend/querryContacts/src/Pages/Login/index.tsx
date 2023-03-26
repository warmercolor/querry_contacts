import { Input } from '../../components/Input'
import { InputPassword } from '../../components/InputPassword'
import { StyleLogin } from './style'
import { ButtonSave } from './../../components/ButtonSave/index';
import { Logo } from './../../components/Logo/index';

export const Login = () => {
  return (
  <StyleLogin>
      <Logo/>
      <div className="form">
      <form className="login-form">
      <Input
        type='text'
        label='email'
        placeholder='Email'
        name='email'
      />
      <InputPassword
        label='password'
        placeholder='Senha'
        name='password'
      />
      <ButtonSave alternation="Entrar"/>
      <p className="message">Não é registrado? <a href="/register">Crie sua conta</a></p>
      </form>
      </div>
    </StyleLogin>
    )
  }
