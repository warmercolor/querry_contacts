import { Input } from '../../components/Input';
import { HeaderContact } from './../../components/HeaderContact/index'
import InputMask from 'react-input-mask'
import { StyleNewContact } from './style';
import { ButtonSave } from './../../components/ButtonSave/index';

export const NewContact = () => {
  return (
    <StyleNewContact>
      <HeaderContact title="Novo Contato"/>
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
      <ButtonSave alternation="Criar Contato"/>
    </StyleNewContact>
  )
}
