import { StyleSearch } from './style'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

export const InputSearch = () => {
  const { filter } = useContext(AuthContext)

  return (
    <StyleSearch>
      <input type="text" placeholder='Pesquisar contato' onChange={(e) => filter(e.currentTarget.value)} />
    </StyleSearch>
  )
}
