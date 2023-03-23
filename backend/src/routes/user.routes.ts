import { Router } from 'express'
import UsersController from './../controllers/Users/index';
import Middlewares from '../middlewares/index';


export const routerUsers = Router()

routerUsers.get(
    '', Middlewares.authorization, UsersController.getAllUsers
)

routerUsers.get(
    '/:id', Middlewares.authorization, UsersController.getUserById
)

routerUsers.post(
    '', UsersController.createUser
)

routerUsers.put(
    '/:id', Middlewares.authorization, UsersController.updateUser
)

routerUsers.delete(
    '/:id', Middlewares.authorization, UsersController.deleteUser
)

export default routerUsers