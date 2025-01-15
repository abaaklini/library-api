import Publisher, { IPublisher } from '../models/publisher.model';

export const createPublisherService = async (publisherData: Partial<IPublisher>): Promise<IPublisher> => {
  const publisher = new Publisher(publisherData);
  return await publisher.save();
};

export const getPublishersService = async (): Promise<IPublisher[]> => {
  return await Publisher.find();
};

export const getPublisherByIdService = async (id: string): Promise<IPublisher | null> => {
  return await Publisher.findById(id);
};

export const updatePublisherService = async (id: string, publisherData: Partial<IPublisher>): Promise<IPublisher | null> => {
  return await Publisher.findByIdAndUpdate(id, publisherData);
};

export const deletePublisherService = async (id: string): Promise<IPublisher | null> => {
  return await Publisher.findByIdAndDelete(id);
}   