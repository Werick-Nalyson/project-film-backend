import 'express-async-errors';
import express from 'express';
import mongoose from 'mongoose';
import { AppErrorMiddleware } from './shared/http/middlewares/AppError';
import { routes } from './shared/http/routes';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(routes);
    app.use(AppErrorMiddleware);

    const port = 3001;
    app.listen(3001, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro connect database'));
