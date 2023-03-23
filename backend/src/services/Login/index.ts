import { User } from "../../entity/user.entities";
import AppDataSource from './../../data-source';
import { IUserLogin } from './../../interface/users/index';
import { AppError } from './../../errors/ErrorHandler/index';
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"


class LoginServices {
    private loginRepository = AppDataSource.getRepository(User)

    async createLogin({email, password}: IUserLogin){
        const user = await this.loginRepository.findOneBy({
            email: email,
        })

        if (!user.email){
            throw new AppError('Ops, your username or password doesnt match', 403)
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new AppError('Ops, your username or password doesnt match', 403)
        }

        const token: any = jwt.sign(
            {
            
            },
            process.env.SECRET_KEY as string,
            {
                expiresIn: "24h",
                subject: user?.id
            }
        )

        return token
    }
}

const LoginService = new LoginServices()
export default LoginService