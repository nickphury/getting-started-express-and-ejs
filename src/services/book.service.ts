export class BookService {
  public getBooks(): Promise<any[]> {
    return new Promise((r) => r(null));
  }
}
