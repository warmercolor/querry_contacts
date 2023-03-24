import { Header } from '../../components/Header';
import { InputSearch } from './../../components/InputSearch/index';
import { ListContacts } from './../../components/ListContacts/index';


export const Contacts = () => {
  return (
    <>
    <Header>
      <InputSearch/>
    </Header>
    <ListContacts/>
    </>
  )
}
