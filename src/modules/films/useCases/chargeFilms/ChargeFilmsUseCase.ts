import { GhibliService } from '../../../../services/ghibli.service';
import { Film } from '../../film.model';

class ChargeFilmsUseCase {
  async execute () {
    const ghibliService = new GhibliService();

    const films = await ghibliService.listAllFilms();

    for (const mov of films) {
      const findFilm = await Film.findOne({
        refId: mov.id,
        film_banner: mov.movie_banner
      }).exec();

      if (findFilm) {
        await Film.where('refId', mov.id).update({
          ...mov,
        });
      } else {
        await Film.create({
          ...mov,
          refId: mov.id,
          film_banner: mov.movie_banner
        });
      }
    }

    const filmsResponse = await Film.find();

    return filmsResponse;
  }
}

export { ChargeFilmsUseCase };
