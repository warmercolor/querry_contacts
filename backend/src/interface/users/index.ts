
import { IContactRequest } from './../contacts/index'

export interface IUserRequest {
    name: string
    lastname: string
    email: string
    phone: string
    password: string
    contact: IContactRequest[]
}

export interface IUser {
    id: string
    name: string
    lastname: string
    email: string
    phone: string
    password: string
    createdAt: Date
    updatedAt: Date
}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    lastname?: string
    email?: string
    phone: string
    password?: string
}