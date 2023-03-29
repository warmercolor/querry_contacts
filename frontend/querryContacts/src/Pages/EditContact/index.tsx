import { useState, useEffect, useContext } from 'react';
import { Input } from '../../components/Input';
import { HeaderContact } from './../../components/HeaderContact/index';
import { StyleNewContact } from './../NewContact/style';
import InputMask from 'react-input-mask';
import { ButtonSave } from './../../components/ButtonSave/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './../../schema/schemaNew';
import { IContactRequest } from './../../../../../backend/src/interface/contacts/index';

import { AuthContext } from './../../context/AuthContext/index';

export const EditContact = () => {

  const { saveContact } = useContext(AuthContext)

  const {
    register,
    formState: {errors },
  } = useForm<IContactRequest>({
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
        defaultValue={saveContact?.name}
      />
      <Input
        type='text'
        label='Sobrenome'
        placeholder='Sobrenome'
        name='lastname'
        register={register}
        defaultValue={saveContact?.lastname}
      />
      <Input
        type='email'
        label='Email'
        placeholder='E-mail'
        name='email'
        register={register}
        defaultValue={saveContact?.email}
      />
      <InputMask
        className="input-mask"
        mask="(99) 9999-9999"
        placeholder="(99) 9999-9999"
        name='phone'
        value={saveContact?.phone}
      />
      <ButtonSave alternation="Salvar Alterações"/>
    </StyleNewContact>
  )
}