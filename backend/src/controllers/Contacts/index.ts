import { Request, Response } from 'express';
import ContactsServiceInstance from '../../services/Contacts';
import { NotFoundHttpException } from '../../errors/HttpException';

class ClassContactsController {
    async getAllContacts(request: Request, response: Response) {
        const contacts = await ContactsServiceInstance.getAllContacts();
        response.status(200).json(contacts);
    }

    async getContactById(request: Request, response: Response) {
        const { id } = request.params
        const contact = await ContactsServiceInstance.getContactById(id)

        if (!contact) {
            throw new NotFoundHttpException('Contact Not Found')
        }

        response.status(200).json(contact);
    }

    async createContact(request: Request, response: Response) {
        const { id } = request.body
        const contact = request.body

        const newContact = await ContactsServiceInstance.createContact(contact, id)

        response.status(201).json(newContact)
    }

    async updateContact(request: Request, response: Response) {
        const { id } = request.params
        const contact = request.body
        const data = await ContactsServiceInstance.updateContact(contact, id)

        response.status(200).json(data);
    }

    async deleteContact(request: Request, response: Response) {
        const { id }= request.params
        const contactToDelete = await ContactsServiceInstance.deleteContact(id)

        if (!contactToDelete) {
            throw new NotFoundHttpException('Contact not found')
        }

        response.status(204).json(contactToDelete)
    }
}

const ContactsController = new ClassContactsController()
export default ContactsController