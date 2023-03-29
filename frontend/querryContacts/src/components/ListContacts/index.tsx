import { StyleList } from './style';
import arrow from '../../assets/arrow.png'
import { CardContact } from '../CardContact';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export const ListContacts = () => {

  const { filtered, contacts } = useContext(AuthContext)

  return (
    <StyleList>
      <header>
        <button type='button' className='sort-button'>
          <span className='sort-span'>Nome</span>
          <img src={arrow} alt="Seta/Arrow" />
        </button>
      </header>
      {
      ([...filtered.length > 0 ?
      filtered : contacts].map((c) => (
      <CardContact
      key={c.id}
      name={c.name}
      email={c.email}
      phone={c.phone}
      id={c.id}
      contactsSave={c}
      />
      )))}
    </StyleList>
  )
}
