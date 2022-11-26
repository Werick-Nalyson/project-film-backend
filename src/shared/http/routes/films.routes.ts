import { Router } from 'express';
import { ListFilmsController } from '../../../modules/films/useCases/listFilms/ListFilmsController';
import { ChageFilmsController } from '../../../modules/films/useCases/chargeFilms/ChageFilmsController';

const listFilmsController = new ListFilmsController();
const chageFilmsController = new ChageFilmsController();

export const filmRoutes = Router();

filmRoutes.get('/', listFilmsController.handle);
filmRoutes.get('/charge-films', chageFilmsController.handle);
