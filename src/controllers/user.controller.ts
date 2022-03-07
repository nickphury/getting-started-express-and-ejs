import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';

class UserController {
  public async signup(req: Request, res: Response, next: NextFunction) {
    const result = await new UserService().signup(req?.body);
    res.send(result).status(201);
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      res
        .send(await new UserService().login(req?.body, req.session))
        .status(200);
    } catch (error) {
      res
        .send({ status: error?.status || 500, message: 'Still Problemos' })
        .status(500);
    }
  }

  public async logout(req: Request, res: Response, next: NextFunction) {
    // TODO
    req.session.destroy((err) => {
      if (err) {
        res.send({ message: 'logout problemo/' }).status(500);
      } else {
        res.redirect('/');
      }
    });
  }
}

export const userController = new UserController();
