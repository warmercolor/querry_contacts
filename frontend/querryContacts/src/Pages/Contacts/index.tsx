import { Header } from '../../components/Header';
import { InputSearch } from './../../components/InputSearch/index';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ListContacts } from './../../components/ListContacts/index';


export const Contacts = () => {
  const { loading, contacts } = useContext(AuthContext)

  if(loading){
    return null
  }

  return (
    <>
    <Header>
      <InputSearch/>
    </Header>
    <ListContacts/>
    </>
  )
}
