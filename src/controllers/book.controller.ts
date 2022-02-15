import { BookService } from '../services/book.service';

class BookController {
  service = new BookService();
  public async getBooks(req: any, res: any, next: any) {
    const books = await this.service.getBooks();
    res.send(books);
  }
}

export const bookController = new BookController();
