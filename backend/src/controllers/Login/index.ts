import { Request, Response } from 'express';
import LoginService from '../../services/Login';
import { IUserLogin } from './../../interface/users/index';

class LoginControllers {

    async createLogin(request: Request, response: Response){
        const data: IUserLogin = request.body

        const token = await LoginService.createLogin(data)

        return response.status(200).json({token})
    }
}

const LoginController = new LoginControllers()
export default LoginController