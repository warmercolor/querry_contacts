
import { Input } from '../../components/Input';
import { HeaderContact } from './../../components/HeaderContact/index';
import { StyleNewContact } from './../NewContact/style';
import InputMask from 'react-input-mask';
import { ButtonSave } from './../../components/ButtonSave/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './../../schema/schemaNew';

export const EditContact = () => {

  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <StyleNewContact>
      <HeaderContact title="Editar Contato"/>
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
        mask="(99) 9999-9999"
        placeholder="(99) 9999-9999"
        name='phone'
      />
      <ButtonSave alternation="Salvar Alterações"/>
    </StyleNewContact>
  )
}