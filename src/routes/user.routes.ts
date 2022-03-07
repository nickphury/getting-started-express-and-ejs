import express from 'express';
import { authMiddleware } from '../middleware/session-auth';
import { userController } from '../controllers/user.controller';

const userRouter = express.Router();
userRouter
  .post('/signup', userController.signup)
  .post('/login', userController.login)
  .get('/logout', authMiddleware, userController.logout);

export default userRouter;
