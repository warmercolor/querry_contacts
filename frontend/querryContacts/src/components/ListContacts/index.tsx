import { StyleCard, StyleList } from './style';
import arrow from '../../assets/arrow.png'
import trash from '../../assets/trash.png'
import edit from '../../assets/edit.png'

export const ListContacts = () => {
  return (
    <StyleList>
      <header>
        <button type='button' className='sort-button'>
          <span className='sort-span'>Nome</span>
          <img src={arrow} alt="Seta/Arrow" />
        </button>
      </header>
      <StyleCard>
        <div className='info'>
          <div className='contact-name'>
          <strong>
          Thaisa Alice
          </strong>
          </div>
          <span>
            thaisaalice@mail.com
          </span>
          <span>
            (44)44444-4444
          </span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Editar/Edit" />
          </a>
          <button type='button'>
            <img src={trash} alt="Lixo/Trash" />
          </button>
        </div>
      </StyleCard>
      <StyleCard>
        <div className='info'>
          <div className='contact-name'>
          <strong>
          Thaisa Alice
          </strong>
          </div>
          <span>
            thaisaalice@mail.com
          </span>
          <span>
            (44)44444-4444
          </span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Editar/Edit" />
          </a>
          <button type='button'>
            <img src={trash} alt="Lixo/Trash" />
          </button>
        </div>
      </StyleCard>
      <StyleCard>
        <div className='info'>
          <div className='contact-name'>
          <strong>
          Thaisa Alice
          </strong>
          </div>
          <span>
            thaisaalice@mail.com
          </span>
          <span>
            (44)44444-4444
          </span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Editar/Edit" />
          </a>
          <button type='button'>
            <img src={trash} alt="Lixo/Trash" />
          </button>
        </div>
      </StyleCard>
    </StyleList>
  )
}
