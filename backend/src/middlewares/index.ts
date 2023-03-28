import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/ErrorHandler/index';
import jwt, { JwtPayload } from 'jsonwebtoken'
import { userInfo } from 'os';

class Middlewares {
    static async authorization(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const { headers } = request

        if (!headers) {
            throw new AppError("Token required", 401)
        }

        let token = request.headers.authorization

        if (!token) {
            throw new AppError("Invalid token", 401)
        }

        token = token.split(" ")[1]

        jwt.verify(
            token,
            process.env.SECRET_KEY as string,
            (error, decoded: JwtPayload) => {
                if (error) {
                    return response.status(401).json({ message: "Invalid Token" })
                }
                return next()
            }
        )
    }
}

export default Middlewares