import { StyleHeader } from './style';
import { Logo } from '../Logo';
import { ReactNode } from 'react';

interface IChildren{
  children: ReactNode
}

export const Header = ({children}: IChildren) => {
  return (
    <StyleHeader>
      <Logo/>
      {children}
      <div className='newContact'>
        <strong className='count'>3 contatos</strong>
        <a href="/" className='btn'>Novo Contato</a>
      </div>
    </StyleHeader>
  )
}
