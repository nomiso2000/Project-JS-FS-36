import { APIhelpers } from '../../../helpers';
import getMovieByQuery from '../../../api_services';
import { createMarkup, getId } from '../../mainPage/mainPage';
import { data } from 'autoprefixer';
import { movieList } from '../../movieList/movieList';

const searchInput = document.querySelector('#search-form');
searchInput.addEventListener('submit', setQuery);

document.querySelector('.movieList');
async function setQuery() {
  event.preventDefault();
  const query = event.currentTarget.input.value;
  APIhelpers.query = query;
  const data = await getMovieByQuery.getMovieByQuery();
  createMarkup(data);
  const movie_list = document.querySelector('.movies_list');
  movie_list.addEventListener('click', getId);
}
