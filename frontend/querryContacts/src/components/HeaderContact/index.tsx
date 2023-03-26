import { Logo } from '../Logo';
import { StyleHeaderContact } from './style';
import { Link } from 'react-router-dom';
import arrow from "../../assets/arrow.png"

interface IProps{
  title: string
}

export const HeaderContact = ({title}: IProps) => {
  return (
    <StyleHeaderContact>
      <Logo/>
      <Link to={"/contacts"}>
      <img src={arrow} alt="Back" />
      <span>Voltar</span>
      </Link>
      <h2>{title}</h2>
    </StyleHeaderContact>
  )
}
