import { Input } from '../../components/Input'
import { HeaderContact } from './../../components/HeaderContact/index'
import InputMask from 'react-input-mask'
import { StyleNewContact } from './style'
import { ButtonSave } from './../../components/ButtonSave/index'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './../../schema/schemaNew'
import { IContact } from '../../../../../backend/src/interface/contacts'
import { AuthContext } from '../../context/AuthContext'
import { createRef, useContext } from 'react'

export const NewContact = () => {


  const {createContacts} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm<IContact>({
    resolver: yupResolver(schema)
  })

  const testeFunc = (testeParam: any) => {
    console.log(testeParam)
    const teste = createContacts(testeParam)
  }
  return (
    <form onSubmit={handleSubmit(testeFunc)}>
      <HeaderContact  title="Novo Contato"/>
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
      <Input
        label='phone'
        type='text'
        name='phone'
        placeholder="(99) 9999-9999"
        register={register}
      />
      <ButtonSave type='submit' alternation="Criar Contato" />
    </form>
  )
}
