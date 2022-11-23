import { Movie } from '../../../movie.model';

class ListMoviesUseCase {
  async execute () {
    const categories = await Movie.find();

    return categories;
  }
}

export { ListMoviesUseCase };
