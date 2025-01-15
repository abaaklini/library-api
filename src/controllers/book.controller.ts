import { Request, Response } from 'express';
import { createBookService, getBooksService, getBookByIdService, updateBookService, deleteBookService } from '../services/book.service';

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await createBookService(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await getBooksService();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await getBookByIdService(req.params.id);
    if (!book) {
      res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await updateBookService(req.params.id, req.body);
    if (!book) {
      res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await deleteBookService(req.params.id);
    if (!book) {
      res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}