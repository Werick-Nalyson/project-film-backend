import { model, Schema } from 'mongoose';

export const Film = model('Film', new Schema({
  title: {
    type: String,
    required: true
  },
  film_banner: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  producer: {
    type: String,
    required: true
  },
  refId: {
    type: String,
    required: true
  }
}));
