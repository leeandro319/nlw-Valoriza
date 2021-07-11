import {Request, Response} from 'express';
import { CreateUserService } from '../services/CreateUserServices';

class CreateUserController{
  async handle(request:Request, response:Response){
    const {name, email, admin} = request.body;

    const creacreUserService = new CreateUserService();
    const user = await creacreUserService.execute({name, email, admin});

    return response.json(user);
  }
}

export {CreateUserController}