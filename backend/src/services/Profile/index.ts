import { User } from "../../entity/user.entities";
import AppDataSource from './../../data-source';
import { AppError } from './../../errors/ErrorHandler/index';
import jwt, { JwtPayload } from 'jsonwebtoken'

class ProfileServices{
    private userRepository = AppDataSource.getRepository(User)
    
    async showProfile(id: string){
        const token = id?.split(" ")[1];
        const { sub } = jwt.decode(token) as JwtPayload;
        const user = await this.userRepository.findOne({ where: { id: sub },  relations: {
            contacts: true,
        }})

        if(!user){
            throw new AppError('User not found')
        }
        
        return user
    }
}

const ProfileService= new ProfileServices()
export default ProfileService