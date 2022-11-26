import { Film } from '../../film.model';

interface IListParams {
  page: number;
}

class ListFilmsUseCase {
  async execute ({ page }: IListParams) {
    page = page <= 0 ? 1 : page;

    const films = await Film.find();
    const paginated = await Film.find().limit(10).skip((page - 1) * 10);

    return {
      total: films.length,
      size: paginated.length,
      pages: Math.ceil(films.length / 10),
      data: paginated,
    };
  }
}

export { ListFilmsUseCase };
