import express from 'express';
import { bookController } from '../controllers/book.controller';

const bookRouter = express.Router();
bookRouter.get('', bookController.getBooks);
export default bookRouter;
