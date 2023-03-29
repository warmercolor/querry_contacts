import { Header } from '../../components/Header';
import { InputSearch } from './../../components/InputSearch/index';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ListContacts } from './../../components/ListContacts/index';
import { StyleContacts } from './style';


export const Contacts = () => {
  const { loading, logout } = useContext(AuthContext)

  if(loading){
    return null
  }

  return (
    <StyleContacts>
    <button className='btn-logout' onClick={() => logout()}>Sair</button>
    <Header>
      <InputSearch/>
    </Header>
    <ListContacts/>
    </StyleContacts>
  )
}
