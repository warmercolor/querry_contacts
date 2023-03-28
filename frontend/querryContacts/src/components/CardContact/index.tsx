import trash from '../../assets/trash.png'
import edit from '../../assets/edit.png'
import { StyleCard } from './style'
import { useContext } from 'react';
import { AuthContext } from './../../context/AuthContext/index';

export interface ICard{
  name: string
  email: string
  phone: string
  id: string
}

export const CardContact = ({name, email, phone, id}: ICard) => {

  const {deleteContacts} = useContext(AuthContext)

  return (
    <StyleCard>
        <div className='info'>
          <div className='contact-name'>
          <strong>
            {name}
          </strong>
          </div>
          <span>
            {email}
          </span>
          <span>
            {phone}
          </span>
        </div>

        <div className="actions">
          <a href="/edit">
            <img src={edit} alt="Editar/Edit" />
          </a>
          <button type='button'>
            <img src={trash} alt="Lixo/Trash" onClick={() => deleteContacts(id)} />
          </button>
        </div>
    </StyleCard>
  )
}
