export interface IBook {
  id: string;
  title: string;
  author: string;
  rating: number;
}

export type ICategory =
  | "combined-print-and-e-book-fiction"
  | "combined-print-and-e-book-nonfiction"
  | "hardcover-fiction"
  | "hardcover-nonfiction"
  | "paperback-trade-fiction"
  | "young-adult-hardcover"
  | "picture-books"
  | "graphic-books-and-manga"
  | "business-books"
  | "science";
