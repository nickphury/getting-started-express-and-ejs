import { NextFunction } from 'express';
import { BookService } from '../services/book.service';

class BookController {
  service = new BookService();
  public async getBooks(req: any, res: any, next: any) {
    const books = await this.service.getBooks();
  }
}

export const bookController = new BookController();
