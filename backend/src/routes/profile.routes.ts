import { Router } from 'express'
import ProfileController from './../controllers/Profile/index';
import Middlewares from './../middlewares/index';

export const routerProfile = Router()

routerProfile.get(
    '', Middlewares.authorization, ProfileController.createProfile
)

export default routerProfile