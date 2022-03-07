import { BookService } from '../services/book.service';

class BookController {
  public async getBooks(req: any, res: any, next: any) {
    const books = await new BookService().getBooks();
    res.send(books);
  }
}

export const bookController = new BookController();
