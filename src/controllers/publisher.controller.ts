import { Request, Response } from 'express';
import { createPublisherService, getPublishersService, getPublisherByIdService, updatePublisherService, deletePublisherService } from '../services/publisher.service';

export const createPublisher = async (req: Request, res: Response) => {
  try {
    const publisher = await createPublisherService(req.body);
    res.status(201).json(publisher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getPublishers = async (req: Request, res: Response) => {
  try {
    const publishers = await getPublishersService();
    res.status(200).json(publishers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPublisherById = async (req: Request, res: Response) => {
  try {
    const publisher = await getPublisherByIdService(req.params.id);
    if (!publisher) {
      res.status(404).json({ error: 'Editora não encontrada' });
    }
    res.status(200).json(publisher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePublisher = async (req: Request, res: Response) => {
  try {
    const publisher = await updatePublisherService(req.params.id, req.body);
    if (!publisher) {
      res.status(404).json({ error: 'Editora não encontrada' });
    }
    res.status(200).json(publisher);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

export const deletePublisher = async (req: Request, res: Response) => {
  try {
    const publisher = await deletePublisherService(req.params.id);
    if (!publisher) {
      res.status(404).json({ error: 'Editora não encontrada' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}