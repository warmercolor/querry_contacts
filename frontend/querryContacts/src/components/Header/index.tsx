import { StyleHeader } from './style';
import { Logo } from '../Logo';
import { ReactNode, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export interface IChildren{
  children: ReactNode
}

export const Header = ({children}: IChildren) => {

  const { contacts } = useContext(AuthContext)

  return (
    <StyleHeader>
      <Logo/>
      {children}
      <div className='newContact'>

        <strong className='count'>{contacts.length} contatos</strong>
        <a href="/new" className='btn'>Novo Contato</a>
      </div>
    </StyleHeader>
  )
}
