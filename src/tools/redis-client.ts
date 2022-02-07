import redis from 'redis';
import dotenv from 'dotenv';

dotenv.config();
const redisClient = redis.createClient({
  url: `${process.env.HOST}:${process.env.REDIS_PORT}`,
});
redisClient.on('connect', (err, res) => {
  'use strict';
  console.log('Connected to Redis : ', res);
});

module.exports = redisClient;
