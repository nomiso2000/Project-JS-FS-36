import { APIhelpers } from '../../../helpers';
import getMovieByQuery from '../../../api_services';
import { createMarkup, getId } from '../../mainPage/mainPage';
import { data } from 'autoprefixer';
import { movieList } from '../../movieList/movieList';
import { Pagination } from '../../pagination/pagination.js';

const searchInput = document.querySelector('#search-form');
searchInput.addEventListener('submit', setQuery);

// function setQuery() {
//   event.preventDefault();
//   const query = event.currentTarget.input.value;
//   console.log(query);
//   APIhelpers.query = query;

//   getMovieByQuery
//     .getMovieByQuery()

//     .then(data => {
//       console.log(data);
//     });
// }
document.querySelector('.movieList');
export async function setQuery() {
  event.preventDefault();

  const query = event.currentTarget.input.value;
  APIhelpers.query = query;
  const data = await getMovieByQuery.getMovieByQuery();
   createMarkup(data.results);
  let totalResults = data.total_pages;
  const context = 'search_api';

  Pagination.Init(totalResults, context, APIhelpers.query);
  const movie_list = document.querySelector('.movies_list');
  movie_list.addEventListener('click', getId);
}
