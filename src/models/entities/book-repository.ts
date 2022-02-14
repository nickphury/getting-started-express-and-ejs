import { Entity, Repository, Schema } from 'redis-om';
import redisClient from '../../tools/redis-client';

export class Book extends Entity {}

const schema = new Schema(
  Book,
  {
    title: { type: 'string', textSearch: true },
    author: { type: 'string', textSearch: true },
    description: { type: 'string' },
  },
  {
    dataStructure: 'JSON',
  }
);

export const bookRepository = new Repository(schema, redisClient);
bookRepository.dropIndex();
bookRepository.createIndex();
// module.exports = bookRepository;
