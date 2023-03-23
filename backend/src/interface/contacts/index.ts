export interface IContactRequest {
    name: string
    lastname: string
    email: string
    phone: string
}

export interface IContact {
    id: string
    name: string
    lastname: string
    email: string
    phone: string
    password: string
    createdAt: Date
    updatedAt: Date
}

export interface IContactUpdate {
    name?: string
    lastname?: string
    email?: string
    phone: string
    password?: string
}