import { Book } from "../types";

// STORE
export type Store = {
  perPage: number;
  page: number;
  changePage: (value: number) => void;
  genres: Array<string>;
  setGenres: (genres: Array<string>) => void;
  currentGenre: string;
  changeCurrentGenre: (value: string) => void;
  books: Array<Book>;
  setBooks: (books: Array<Book>) => void;
  filteredBooks: Array<Book>;
  setFilteredBooks: (filteredBooks: Array<Book>) => void;
  selectedBooks: Array<string>;
  setSelectedBooks: (selectedBooks: Array<string>) => void;
};
