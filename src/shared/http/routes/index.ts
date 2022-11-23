import { Router } from 'express';

import { movieRoutes } from './movies.routes';

const routes = Router();

routes.use('/movies', movieRoutes);

export { routes };
