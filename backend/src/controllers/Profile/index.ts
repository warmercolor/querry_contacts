import { Request, Response } from 'express';
import ProfileService from './../../services/Profile/index';

class ProfileControllers {

    async createProfile(request: Request, response: Response){
        const data = request.headers.authorization
        const result = await ProfileService.showProfile(data)
        console.log(data)
        return response.status(200).json(result)
    }
}

const ProfileController = new ProfileControllers()
export default ProfileController