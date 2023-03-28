import AppDataSource from "../../data-source";
import { Contacts } from "../../entity/contacts.entities";
import { IContactRequest } from './../../interface/contacts/index';
import { AppError } from './../../errors/ErrorHandler/index';
import { User } from "../../entity/user.entities";
import jwt, {JwtPayload} from 'jsonwebtoken';

class ContactsService {
    private contactsRepository = AppDataSource.getRepository(Contacts)
    private userRepository = AppDataSource.getRepository(User);

    async getAllContacts() {
        const contacts = await this.contactsRepository.find();
        return contacts
    }

    async getContactById(id: string) {
        const contact = await this.contactsRepository.findOne({ where: { id } });
        return contact;
    }

    async createContact({name, lastname, phone, email}: IContactRequest, id: string) {
        const token = id?.split(" ")[1];
        const { sub } = jwt.decode(token) as JwtPayload;
        const emailExist = await this.contactsRepository.findOneBy({ email })

        if (emailExist) {
            throw new AppError("Email exist", 409)
        }

        const user = await this.userRepository.findOne({ where: { id: sub } });

        if (!user) {
            throw new AppError('User not found', 404);
        }

        const contact = this.contactsRepository.create({
            name,
            lastname,
            phone,
            email,
            user
        })

        await this.contactsRepository.save(contact)

        return contact;
    }

    async updateContact({name, lastname, phone, email}: IContactRequest, id: string) {
        const byContact = await this.contactsRepository.findOneBy({
            id,
        })

        if (!byContact) {
            throw new AppError("Contact not found", 404);
        }

        await this.contactsRepository.update(id, {
            name: name ? name : byContact?.name,
            lastname: lastname ? lastname : byContact?.lastname,
            email: email ? email : byContact?.email,
            phone: phone ? phone : byContact?.phone,
        });

        const contact = await this.contactsRepository.findOneBy({
            id,
        })

        return contact
    }

    async deleteContact(id: string) {
        const byUser = await this.contactsRepository.findOneBy({
            id,
        });

        if (!byUser) {
            throw new AppError("Contact not found", 404);
        }

        await this.contactsRepository.delete(id)

        return "User contact"
    }
}

const ContactsServiceInstance = new ContactsService();
export default ContactsServiceInstance;