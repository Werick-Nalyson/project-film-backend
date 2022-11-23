import { Router } from 'express';
import { ListMoviesController } from '../../../modules/movies/useCases/listMovies/ListMoviesController';
import { ChageMoviesController } from '../../../modules/movies/useCases/chargeMovies/ChageMoviesController';

const listMoviesController = new ListMoviesController();
const chageMoviesController = new ChageMoviesController();

export const movieRoutes = Router();

movieRoutes.get('/', listMoviesController.handle);
movieRoutes.get('/charge-movies', chageMoviesController.handle);
