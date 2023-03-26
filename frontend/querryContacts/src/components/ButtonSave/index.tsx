import React from 'react'
import { StyleButtonSave } from './style';

interface IButton{
  alternation: string
}

export const ButtonSave = ({alternation}: IButton) => {
  return (
    <StyleButtonSave>{alternation}</StyleButtonSave>
  )
}
