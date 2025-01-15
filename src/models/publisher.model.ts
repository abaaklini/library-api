import { Schema, model, Document } from 'mongoose';

export interface IPublisher extends Document {
  name: string;
  address: string;
}

const PublisherSchema = new Schema<IPublisher>({
  name: { type: String, required: true, unique: true },
  address: { type: String, required: true }
});

export default model<IPublisher>('Publisher', PublisherSchema);