import { Request, Response } from 'express';

import { ListFilmsUseCase } from './ListFilmsUseCase';

class ListFilmsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page } = request.query;

    const listFilmsUseCase = new ListFilmsUseCase();

    const films = await listFilmsUseCase.execute({ page: Number(page) });

    return response.json(films);
  }
}

export { ListFilmsController };
