import { Route, Routes } from 'react-router-dom'
import { NewContact } from '../Pages/NewContact';
import { Register } from '../Pages/Register';
import { Contacts } from './../Pages/Contacts';
import { Login } from './../Pages/Login/index';
import { EditContact } from './../Pages/EditContact/index';


export function RoutesUrl() {

  return (
    <Routes>

    <Route path='/' element={
      <Login/>
    }>
    </Route>

    <Route path='/register' element={
      <Register/>
    }>
    </Route>

    <Route path='/contacts' element={
      <Contacts/>
    }>
    </Route>

    <Route path='/new' element={
      <NewContact/>
    }>
    </Route>

    <Route path='/edit' element={
      <EditContact/>
    }>
    </Route>

    </Routes>
    )
  }