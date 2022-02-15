import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';

class UserController {
  public async signup(req: Request, res: Response, next: NextFunction) {
    const result = await new UserService().signup(req?.body);
    res.send(result).status(201);
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      res.send(await new UserService().login(req?.body)).status(200);
    } catch (error) {
      console.warn('object : ', error);
      res.send({ status: error?.status || 500, message: 'Still Problemos' });
    }
  }
}

export const userController = new UserController();
