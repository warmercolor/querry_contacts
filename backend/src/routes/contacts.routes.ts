import { Router } from 'express'
import ContactsController from './../controllers/Contacts/index';
import Middlewares from '../middlewares/index';


export const routerContacts = Router()

routerContacts.get(
    '', Middlewares.authorization, ContactsController.getAllContacts
)

routerContacts.get(
    '/:id', Middlewares.authorization, ContactsController.getContactById
)

routerContacts.post(
    '', ContactsController.createContact
)

routerContacts.put(
    '/:id', Middlewares.authorization, ContactsController.updateContact
)

routerContacts.delete(
    '/:id', Middlewares.authorization, ContactsController.deleteContact
)

export default routerContacts