import { createContext, useState, useLayoutEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { IUserLogin, IUserProfile } from '../../../../../backend/src/interface/users';
import { IContact} from '../../../../../backend/src/interface/contacts';
import { IChildren } from './../../components/Header/index'
import { ISubmit } from './../../Pages/Register/index'
import { Api } from '../../service'


export interface IUser{
  id: string
  name: string
  lastname: string
  email: string
  phone: string
  createdAt: Date
  updatedAt: Date
  password: string
  contacts: IContact[]
}

export interface IAuthContext{
  user: IUser
  loginUser: (data: IUserLogin) => void
  loading: boolean
  contacts: IContact[]
  setContacts: (value: IContact[]) => void
  setUser: (value: IUser) => void
  registerUser: (data: IUser) => void
  createContacts: (data: IContact) => void
  deleteContacts: (id: string) => void
}

export interface IData{
  user: IUser
  token: string
  userResponse: IUser
}

export const AuthContext = createContext({} as IAuthContext)

export const Authorization = ({children}: IChildren) => {
  const [ user, setUser ] = useState<IUser>({} as IUser)
  const [ loading, setLoading ] = useState(true)
  const [ contacts, setContacts ] = useState<IContact[]>({} as IContact[])
  const navigate = useNavigate()
  const location = useLocation()

  useLayoutEffect(() => {
    async function loadingUser() {
      const token = localStorage.getItem('@QuerryContacts: token')
      if(token){
        try{
          Api.defaults.headers.authorization = `Bearer ${token}`
          const result = await Api.get<IUserProfile>("/profile")

          const { data } = result
          const { contacts } = result.data
          setContacts(contacts)
          const toNavigate = location.state?.from?.pathname
          navigate(toNavigate, { replace: true })
          setUser(data)
        }
        catch(error){
          console.log(error)
        }
      }
      setLoading(false)
    }
    return () => {loadingUser()}
  }, [])

  const loginUser = async (data: IUserLogin) => {
    try{
      const result = await Api.post<IData>('/login', data)
      const token = result.data.token
      localStorage.setItem('@QuerryContacts: token', token)

      const toNavigate = location.state?.from?.pathname || '/contacts'
      navigate(toNavigate, { replace: true })
    }
    catch(error){
      console.log(error)
    }
  }

  const registerUser = async (data: ISubmit) => {
    try{
        const result = await Api.post<ISubmit>('/users', data)
        result
        const toNavigate = location.state?.from?.pathname || '/'
            navigate(toNavigate, { replace: true })
    }
    catch(error){
        console.log('Ops, algo deu errado!', error)
    }
}

  const createContacts = async (data: IContact) => {
    try {
      console.log(data)
      const result = await Api.post("/contacts", data)
      setContacts([...contacts, result.data])
    } catch (error) {
      console.log(error)
    }
  }

  const deleteContacts = async (id: string) => {
    try{
      await Api.delete(`/contacts/${id}`)
      const listContacts = contacts.filter((cont) => {
          return cont.id !== id
      })
      setContacts(listContacts)
    }
    catch ( error ) {
        console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{user, setUser, loading, loginUser, contacts, setContacts, registerUser, createContacts, deleteContacts}}>
    {children}
  </AuthContext.Provider>
  )
}


