import { Request, Response } from 'express';

import { ListMoviesUseCase } from './ListMoviesUseCase';

class ListMoviesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page } = request.query;

    const listMoviesUseCase = new ListMoviesUseCase();

    const movies = await listMoviesUseCase.execute({ page: Number(page) });

    return response.json(movies);
  }
}

export { ListMoviesController };
