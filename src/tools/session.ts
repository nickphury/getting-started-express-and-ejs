// import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import * as session from 'express-session';
import connectRedis from 'connect-redis';
import redisClient from './redis-client';
const RedisStore = connectRedis(session.default);

dotenv.config();
// const RedisStore = connectRedis(session)
export const getSession = session.default({
  genid: () => {
    return uuidv4();
  },
  secret: process.env.SESSION_SECRET,
  store: new RedisStore({
    host: process.env.HOST,
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    client: redisClient,
  }),
  resave: false,
  saveUninitialized: false,
  name: process.env.SESSION_NAME,
});
