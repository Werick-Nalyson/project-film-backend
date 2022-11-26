import { Request, Response } from 'express';

import { ChargeFilmsUseCase } from './ChargeFilmsUseCase';

class ChageFilmsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listFilmsUseCase = new ChargeFilmsUseCase();

    const films = await listFilmsUseCase.execute();

    return response.json(films);
  }
}

export { ChageFilmsController };
