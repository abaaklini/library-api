import Book, { IBook } from '../models/book.model';

export const createBookService = async (bookData: Partial<IBook>): Promise<IBook> => {
  const book = new Book(bookData);
  return await book.save();
};

export const getBooksService = async (): Promise<IBook[]> => {
  return await Book.find().populate('publisher');
};

export const getBookByIdService = async (id: string): Promise<IBook | null> => {
  return await Book.findById(id).populate('publisher');
};

export const updateBookService = async (id: string, bookData: Partial<IBook>): Promise<IBook | null> => {
  return await Book.findByIdAndUpdate(id, bookData);
};

export const deleteBookService = async (id: string): Promise<IBook | null> => {
  return await Book.findById(id).populate('publisher').then(async book => {
    if (book) {
      await book.deleteOne();
    }
    return book;
  });
};