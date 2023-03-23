import { Request, Response } from 'express'
import UserService from '../../services/Users'

class ClassUsersController {
    async getAllUsers(request: Request, response: Response) {
        const users = await UserService.getAllUsers()
        return response.status(200).json(users)
    }

    async getUserById(request: Request, response: Response) {
        const { id }= request.params
        const user = await UserService.getUserById(id);
        if (!user) {
            return response.status(404).json({ message: 'User not found' })
        }
        response.status(200).json(user)
    }

    async createUser(request: Request, response: Response) {
        const user = request.body

        const newUser = await UserService.createUser(user)

        return response.status(201).json(newUser)
    }

    async updateUser(request: Request, response: Response) {
        const { id } = request.params

        const user = request.body

        const data = await UserService.updateUser(user, id)

        return response.status(200).json(data)
    }

    async deleteUser(request: Request, response: Response) {
        const { id } = request.params
        const deletedUser = await UserService.deleteUser(id)
        response.status(204).json(deletedUser)
    }
}

const UsersController = new ClassUsersController()
export default UsersController