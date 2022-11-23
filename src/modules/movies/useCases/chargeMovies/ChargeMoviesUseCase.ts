import { GhibliService } from '../../../../services/ghibli.service';
import { Movie } from '../../../movie.model';

class ChargeMoviesUseCase {
  async execute () {
    const ghibliService = new GhibliService();

    const movies = await ghibliService.listAllMovies();

    for (const mov of movies) {
      const findMovie = await Movie.findOne({
        refId: mov.id
      }).exec();

      if (findMovie) {
        await Movie.where('refId', mov.id).update({
          ...mov,
        });
      } else {
        await Movie.create({
          ...mov,
          refId: mov.id
        });
      }
    }

    const moviesResponse = await Movie.find();

    return moviesResponse;
  }
}

export { ChargeMoviesUseCase };
