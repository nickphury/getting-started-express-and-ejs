import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = (req?.headers?.authorization as string)?.split(' ')[1];
    if (!token) {
      throw { error: true, message: 'Not authorized' };
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!decodedToken) {
      throw { error: true, message: 'Not authorized' };
    }
    const userId = (decodedToken as any)?.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw new Error('Invalid user');
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ message: error?.message || 'Problemo' });
  }
}
