
import InputMask from 'react-input-mask'
import { Input } from '../../components/Input'
import { ButtonSave } from './../../components/ButtonSave/index'
import { StyleRegister } from './style'
import { InputPassword } from '../../components/InputPassword'
import { Logo } from './../../components/Logo/index'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './../../schema/schemaRegister'
import { IContact } from './../../../../../backend/src/interface/contacts/index'

export interface ISubmit{
  id: string
  name: string
  lastname: string
  email: string
  password: string
  phone: string
  createdAt: Date
  updatedAt: Date
  contacts: IContact[]
  }

export const Register = () => {

  const navigate = useNavigate()
  const { registerUser } = useContext(AuthContext)

      const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ISubmit>({
        resolver: yupResolver(schema)
    })


  return (
    <StyleRegister>
      <Logo/>
      <div className="form">
      <form className="register-form" onSubmit={handleSubmit(registerUser)}>
      <Input
        type='text'
        label='Nome'
        placeholder='Nome'
        name='name'
        register={register}
      />
      <Input
        type='text'
        label='Sobrenome'
        placeholder='Sobrenome'
        name='lastname'
        register={register}
      />
      <Input
        type='email'
        label='Email'
        placeholder='E-mail'
        name='email'
        register={register}
      />
      <InputMask
        className="input-mask"
        mask="(99) 99999-9999"
        placeholder="Telefone"
        {...register('phone')}
      />
      <InputPassword
        label='password'
        placeholder='Senha'
        name='password'
        register={register}
      />
      <ButtonSave alternation="Cadastrar"/>
      <p className="message">Já é registrado? <button onClick={
        () => navigate("/")}>Faça login</button></p>
      </form>
      </div>
    </StyleRegister>
  )
}
