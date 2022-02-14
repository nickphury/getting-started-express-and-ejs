// import redis from 'redis';
import dotenv from 'dotenv';
import { Client } from 'redis-om';

dotenv.config();
// const redisClient = redis.createClient({
//   url: `${process.env.HOST}:${process.env.REDIS_PORT}`,
// });
// redisClient.on('connect', (err, res) => {
//   'use strict';
//   console.log('Connected to Redis : ', res);
// });
const redisClient = new Client();
redisClient.open(`${process.env.HOST}:${process.env.REDIS_PORT}`);
// module.exports = redisClient;
export default redisClient;
