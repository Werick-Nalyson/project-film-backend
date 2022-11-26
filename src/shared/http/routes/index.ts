import { Router } from 'express';

import { filmRoutes } from './films.routes';

const routes = Router();

routes.use('/films', filmRoutes);

export { routes };
