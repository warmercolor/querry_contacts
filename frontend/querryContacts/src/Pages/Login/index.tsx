import { Input } from '../../components/Input'
import { InputPassword } from '../../components/InputPassword'
import { StyleLogin } from './style'
import { ButtonSave } from './../../components/ButtonSave/index';
import { Logo } from './../../components/Logo/index';
import { IUserLogin } from './../../../../../backend/src/interface/users/index';
import { schema } from './../../schema/schemaLogin';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';

export const Login = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema)
  })


  return (
  <StyleLogin>
      <Logo/>
      <div className="form">
      <form className="login-form" onSubmit={handleSubmit(loginUser)}>
      <Input
        type='text'
        label='email'
        placeholder='Email'
        name='email'
        register= {register}
      />
      <InputPassword
            label='password'
            placeholder='Senha'
            name='password'
            register={register} />
      <ButtonSave alternation="Entrar"/>
      <p className="message">Não é registrado? <button onClick={
        () => navigate("/register")
      }>Crie sua conta</button></p>
      </form>
      </div>
    </StyleLogin>
    )
  }
