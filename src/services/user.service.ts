import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import dotenv from 'dotenv';
import redisClient from '../tools/redis-client';

dotenv.config();

export class UserService {
  public async signup(userDto: any): Promise<any> {
    try {
      return new User({
        email: userDto.email,
        password: await bcrypt.hash(userDto?.password, 10),
      }).save();
    } catch (error) {
      throw new Error(
        `Signup problemo :\n - message : ${error?.message}\n - code : ${
          error?.status || 503
        }`
      );
    }
  }

  public async login(userDto: any, session: any): Promise<any> {
    try {
      const userTmp = await User.findOne({ email: userDto.email });
      if (!userTmp) {
        throw { message: 'User not found', status: 401 };
      }
      const isValid = await bcrypt.compare(userDto.password, userTmp.password);
      if (!isValid) {
        throw { message: 'Incorrect password', status: 400 };
      }
      // await redisClient.set('clef', JSON.stringify(userTmp));
      session.user = userTmp;
      return {
        id: userTmp._id,
        token: jwt.sign(
          {
            userId: userTmp._id,
            others:
              'And others stuff if needed for calling others api for example',
          },
          process.env.TOKEN_SECRET,
          { expiresIn: '1h' }
        ),
      };
    } catch (error) {
      throw { error, message: 'Internal Problemo' };
    }
  }
}
