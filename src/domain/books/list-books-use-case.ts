import { IBook } from "./entity";

export interface IListBooksUseCase {
  execute: () => Promise<IBook[]>;
}
