import { Request, Response } from 'express';

import { ChargeMoviesUseCase } from './ChargeMoviesUseCase';

class ChageMoviesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listMoviesUseCase = new ChargeMoviesUseCase();

    const movies = await listMoviesUseCase.execute();

    return response.json(movies);
  }
}

export { ChageMoviesController };
