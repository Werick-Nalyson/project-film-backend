import { Request, Response } from 'express';

import { ListMoviesUseCase } from './ListMoviesUseCase';

class ListMoviesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listMoviesUseCase = new ListMoviesUseCase();

    const movies = await listMoviesUseCase.execute();

    return response.json(movies);
  }
}

export { ListMoviesController };
