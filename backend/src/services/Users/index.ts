import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { Contacts } from "../../entity/contacts.entities";
import { User } from "../../entity/user.entities";
import { AppError } from './../../errors/ErrorHandler/index';
import { IUserRequest, IUserUpdate } from './../../interface/users/index';

class UserServices {
    private userRepository = AppDataSource.getRepository(User);

    async getAllUsers() {
        const users = await this.userRepository.find({
            relations: {
                contacts: true,
            }
        })

        return users;
    }

    async getUserById(id: string) {
        const user = await this.userRepository.findOne({ where: { id } })

        if (user){
            user.password = await hash(user.password, 8)
        }

        return user;
    }

    async createUser({name, lastname, phone, password, email, contact}: IUserRequest) {
        const emailExist = await this.userRepository.findOneBy({ email })

        if (emailExist) {
            throw new AppError("Email exist", 409)
        }

        const hashed = await hash(password, 8)

        const user = this.userRepository.create({
            name,
            lastname,
            phone,
            email,
            password: hashed,
        })

        await this.userRepository.save(user)

        const { password: _, ...newUser } = user

        return newUser;
    }

    async updateUser({name, lastname, phone, password, email}: IUserUpdate, id: string) {
        const byUser = await this.userRepository.findOneBy({
            id,
        })

        if (!byUser) {
            throw new AppError("User not found", 404);
        }

        await this.userRepository.update(id, {
            name: name ? name : byUser?.name,
            lastname: lastname ? lastname : byUser?.lastname,
            email: email ? email : byUser?.email,
            phone: phone ? phone : byUser?.phone,
            password: password ? password : byUser?.password,
        });

        const user = await this.userRepository.findOneBy({
            id,
        })

        return user
    }

    async deleteUser(id: string) {
        const byUser = await this.userRepository.findOneBy({
            id,
        });

        if (!byUser) {
            throw new AppError("User not found", 404);
        }

        await this.userRepository.delete(id)

        return "User deleted"
    }
}

const UserService = new UserServices()
export default UserService