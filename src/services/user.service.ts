import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import dotenv from 'dotenv';

dotenv.config();

export class UserService {
  public async signup(userDto: any): Promise<any> {
    const pwdHashed = await bcrypt.hash(userDto?.password, 10);
    return new User({
      email: userDto.email,
      password: pwdHashed,
    }).save();
  }

  public login(userDto: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const userTmp = await User.findOne({ email: userDto.email });
        if (!userTmp) {
          reject({ message: 'User not found', status: 401 });
        }
        const isValid = await bcrypt.compare(
          userDto.password,
          userTmp.password
        );
        if (!isValid) {
          reject({ message: 'Incorrect password', status: 400 });
        }
        resolve({
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
        });
      } catch (error) {
        reject({ error, message: 'Internal Problemo' });
      }
    });
  }
}
