import { Schema, model, Document } from 'mongoose';
import { IPublisher } from './publisher.model';

export interface IBook extends Document {
  title: string;
  author: string;
  publisher: IPublisher['_id'];
  year: number;
  isbn: string;
}

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: Schema.Types.ObjectId, ref: 'Publisher', required: true },
  year: { type: Number, required: true },
  isbn: { type: String, required: true, unique: true }
}, {
  timestamps: true
});

export default model<IBook>('Book', BookSchema);