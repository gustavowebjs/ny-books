/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBook } from "../../domain/books/entity";
import { IListBooksUseCase } from "../../domain/books/list-books-use-case";

export class RemoteListBooksUseCase implements IListBooksUseCase {
  constructor(private readonly url: string, private readonly apiKey: string) {}

  async execute(): Promise<IBook[]> {
    const requestUrl = `${import.meta.env.VITE_NY_TIMES_BASE_URL}/${
      this.url
    }&api-key=${this.apiKey}`;

    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await response.json();

    return data.results.map((book: any) => ({
      id: book.primary_isbn13,
      title: book.book_details[0]?.title,
      author: book.book_details[0]?.author,
      rating: book.rank,
    }));
  }
}
