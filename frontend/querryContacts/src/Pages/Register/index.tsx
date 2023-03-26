
import InputMask from 'react-input-mask';
import { Input } from '../../components/Input';
import { ButtonSave } from './../../components/ButtonSave/index';
import { StyleRegister } from './style';
import { InputPassword } from '../../components/InputPassword';
import { Logo } from './../../components/Logo/index';
import { StyleLogin } from './../Login/style';

export const Register = () => {
  return (
    <StyleRegister>
      <Logo/>
      <div className="form">
      <form className="register-form">
      <Input
        type='text'
        label='Nome'
        placeholder='Nome'
        name='name'
      />
      <Input
        type='text'
        label='Sobrenome'
        placeholder='Sobrenome'
        name='lastname'
      />
      <Input
        type='email'
        label='Email'
        placeholder='E-mail'
        name='email'
      />
      <InputMask
        className="input-mask"
        mask="(99) 99999-9999"
        placeholder="Telefone"
        name='phone'
      />
      <InputPassword
        label='password'
        placeholder='Senha'
        name='password'
      />
      <ButtonSave alternation="Cadastrar"/>
      <p className="message">Já é registrado? <a href="/">Faça login</a></p>
      </form>
      </div>
    </StyleRegister>
  )
}
