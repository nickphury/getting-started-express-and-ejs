import { bookRepository, Book } from '../models/entities/book-repository';

export class BookService {
  public getBooks(): Promise<Book[]> {
    return bookRepository.search().returnAll();
  }
}
