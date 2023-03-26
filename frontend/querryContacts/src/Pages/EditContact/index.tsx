
import { Input } from '../../components/Input';
import { HeaderContact } from './../../components/HeaderContact/index';
import { StyleNewContact } from './../NewContact/style';
import InputMask from 'react-input-mask';
import { ButtonSave } from './../../components/ButtonSave/index';

export const EditContact = () => {
  return (
    <StyleNewContact>
      <HeaderContact title="Editar Contato"/>
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
        mask="(99) 9999-9999"
        placeholder="(99) 9999-9999"
        name='phone'
      />
      <ButtonSave alternation="Salvar Alterações"/>
    </StyleNewContact>
  )
}