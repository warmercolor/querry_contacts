import trash from '../../assets/trash.png'
import edit from '../../assets/edit.png'
import { StyleCard } from './style'
import { useContext, useState } from 'react';
import { AuthContext } from './../../context/AuthContext/index';
import { IContact } from '../../../../../backend/src/interface/contacts';
import { useNavigate } from 'react-router-dom';

export interface ICard{
  name: string
  email: string
  phone: string
  id: string
  contactsSave: IContact
}

export const CardContact = ({contactsSave, name, email, phone, id}: ICard) => {

  const {deleteContacts, setSaveContact, saveContact} = useContext(AuthContext)
  const navigate = useNavigate()

  const Save = (contactSaved: IContact) => {
    setSaveContact(contactSaved)
    navigate("/edit")
  }


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
          <button onClick={() => Save(contactsSave)}>
            <img src={edit} alt="Editar/Edit" />
          </button>
          <button type='button'>
            <img src={trash} alt="Lixo/Trash" onClick={() => deleteContacts(id)} />
          </button>
        </div>
    </StyleCard>
  )
}
