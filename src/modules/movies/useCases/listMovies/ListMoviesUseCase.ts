import { Movie } from '../../movie.model';

interface IListParams {
  page: number;
}

class ListMoviesUseCase {
  async execute ({ page }: IListParams) {
    page = page <= 0 ? 1 : page;

    const movies = await Movie.find();
    const paginated = await Movie.find().limit(10).skip((page - 1) * 10);

    return {
      total: movies.length,
      size: paginated.length,
      pages: Math.ceil(movies.length / 10),
      data: paginated,
    };
  }
}

export { ListMoviesUseCase };
