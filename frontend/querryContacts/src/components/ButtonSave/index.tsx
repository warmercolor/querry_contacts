import {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { StyleButtonSave } from './style';

interface IButton{
  alternation: string
  [rest: string]:any
}

export const ButtonSave = ({alternation, ...rest}: IButton) => {

  return (
    <StyleButtonSave {...rest}>{alternation}</StyleButtonSave>
  )
}
