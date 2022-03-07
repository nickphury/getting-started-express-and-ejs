import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();
const redisClient = new Redis(
  `redis://${process.env.HOST}:${process.env.REDIS_PORT}`
);
redisClient.on('connect', (err, res) => {
  'use strict';
  console.log('Connected to Redis');
});
export default redisClient;
