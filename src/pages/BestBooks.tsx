import { useQuery } from "@tanstack/react-query";
import { RemoteListBooksUseCase } from "../data/books/remote-list-books-use-case";
import { Select } from "../components/common/Select";
import { useState } from "react";
import { ICategory } from "../domain/books/entity";

export const BestBooks = () => {
  const categories = [
    "hardcover-fiction",
    "hardcover-nonfiction",
    "combined-print-and-e-book-fiction",
    "combined-print-and-e-book-nonfiction",
    "paperback-trade-fiction",
    "young-adult-hardcover",
    "picture-books",
    "graphic-books-and-manga",
    "business-books",
    "science",
  ];

  const [selectedCategory, setSelectedCategory] =
    useState<ICategory>("hardcover-fiction");

  const { data = [], isLoading } = useQuery({
    queryKey: ["books", selectedCategory],
    queryFn: () =>
      new RemoteListBooksUseCase(
        `lists.json?list=${selectedCategory}`,
        import.meta.env.VITE_NY_TIMES_API_KEY
      ).execute(),
  });

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Best-Selling Books
        </h1>

        <div className="flex gap-2">
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as ICategory)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </Select>
        </div>

        <div className="mt-6" />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white" />
          </div>
        ) : (
          <div className="grid gap-6">
            {data.map((book) => (
              <div
                key={book.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {book.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  by {book.author}
                </p>
                <div className="flex items-center text-gray-900 dark:text-white">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{book.rank}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
