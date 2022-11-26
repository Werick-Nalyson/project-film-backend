import Axios from 'axios';

class GhibliService {
  baseURL = '';

  constructor () {
    this.baseURL = 'https://ghibliapi.herokuapp.com';
  }

  async listAllFilms () {
    const response = await Axios.get(`${this.baseURL}/films?limit=50`);

    return response.data;
  }

}

export { GhibliService };
