import axios from 'axios';
import { APIhelpers } from './helpers';

const api_key = '249034089965cfc778893cbdb0f537e5';
const generes = {
  info: [],
};
export const getGeneres = async () => {
  generes.info = await axios
    .get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=249034089965cfc778893cbdb0f537e5&language=en-US',
    )
    .then(response => response.data.genres);
};

export const getGenresList = array => {
  if (array === undefined) {
    array = [];
  }
  const mapArray = array.map(item =>
    generes.info.find(genre => genre.id === item),
  );

  return mapArray;
};

export default {
  async getMovies() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${APIhelpers.page}`,
      );
      await getGeneres();
      const result = response.data.results.map(film => {
        film.genres = getGenresList(film.genre_ids);
        return film;
      });

      return result;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getMoviesForPlag() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${APIhelpers.page}`,
      );

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getMovieByQuery() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${APIhelpers.query}&page=${APIhelpers.page}`,
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getMovieByID(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};
