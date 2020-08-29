import axios from 'axios';
import { APIhelpers } from './helpers';
const api_key = '249034089965cfc778893cbdb0f537e5';
export default {
  async getMovies() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${APIhelpers.page}`,
      );
      return response.data.results;
      // return response;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getMovieByQuery() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${APIhelpers.query}&page=${APIhelpers.page}`,
      );
      return response.data.results;
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
