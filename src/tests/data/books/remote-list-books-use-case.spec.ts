import { describe, expect, test, vi, beforeEach } from "vitest";
import { RemoteListBooksUseCase } from "../../../data/books/remote-list-books-use-case";

describe("RemoteListBooksUseCase", () => {
  let sut: RemoteListBooksUseCase;
  const mockUrl = "mock-url";
  const mockApiKey = "mock-api-key";

  beforeEach(() => {
    sut = new RemoteListBooksUseCase(mockUrl, mockApiKey);
    vi.stubGlobal("fetch", vi.fn());
  });

  test("should call fetch with correct URL", async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ results: [] }),
    });
    vi.stubGlobal("fetch", mockFetch);

    await sut.execute();

    expect(mockFetch).toHaveBeenCalledWith(
      `${
        import.meta.env.VITE_NY_TIMES_BASE_URL
      }/${mockUrl}&api-key=${mockApiKey}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
  });

  test("should return mapped books on success", async () => {
    const mockResponse = {
      results: [
        {
          primary_isbn13: "1234567890123",
          book_details: [
            {
              title: "Test Book",
              author: "Test Author",
            },
          ],
          rank: 1,
        },
      ],
    };

    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });
    vi.stubGlobal("fetch", mockFetch);

    const result = await sut.execute();

    expect(result).toEqual([
      {
        id: "1234567890123",
        title: "Test Book",
        author: "Test Author",
        rating: 1,
      },
    ]);
  });

  test("should throw error when fetch fails", async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: false,
    });
    vi.stubGlobal("fetch", mockFetch);

    await expect(sut.execute()).rejects.toThrow("Failed to fetch books");
  });

  test("should handle missing book details gracefully", async () => {
    const mockResponse = {
      results: [
        {
          primary_isbn13: "1234567890123",
          book_details: [],
          rank: 1,
        },
      ],
    };

    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });
    vi.stubGlobal("fetch", mockFetch);

    const result = await sut.execute();

    expect(result).toEqual([
      {
        id: "1234567890123",
        title: undefined,
        author: undefined,
        rating: 1,
      },
    ]);
  });

  test("should handle network errors", async () => {
    const mockFetch = vi.fn().mockRejectedValueOnce(new Error("Network error"));
    vi.stubGlobal("fetch", mockFetch);

    await expect(sut.execute()).rejects.toThrow();
  });
});
