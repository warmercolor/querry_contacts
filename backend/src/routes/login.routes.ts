import { Router } from 'express'
import LoginController from './../controllers/Login';


export const routerLogin = Router()

routerLogin.post(
    '', LoginController.createLogin
)

export default routerLogin