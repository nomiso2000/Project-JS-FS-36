import { APIhelpers } from '../../../helpers';
import getMovieByQuery from '../../../api_services';
import { createMarkup, getId } from '../../mainPage/mainPage';
import { data } from 'autoprefixer';
import { movieList } from '../../movieList/movieList';
import { Pagination } from '../../pagination/pagination';
import axios from 'axios';
import { refs } from '../../../refs';
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
  const mapArray = array.map(item =>
    generes.info.find(genre => genre.id === item),
  );
  return mapArray;
};

const searchInput = document.querySelector('#search-form');
searchInput.addEventListener('submit', setQuery);
document.querySelector('.movieList');
export async function setQuery() {
  event.preventDefault();
  const query = event.currentTarget.input.value;
  APIhelpers.query = query;

  const data = await getMovieByQuery.getMovieByQuery();

  await getGeneres();
  const result = data.data.results.map(film => {
    film.genres = getGenresList(film.genre_ids);
    return film;
  });
  createMarkup(result);

  let totalResults = data.data.total_pages;
  const context = 'search_api';
  Pagination.Init(totalResults, context, APIhelpers.query);
  const movie_list = document.querySelector('.movies_list');
  movie_list.addEventListener('click', getId);
}
