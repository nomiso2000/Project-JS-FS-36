import { APIhelpers } from '../../../helpers';
import getMovieByQuery from '../../../api_services';
import { createMarkup } from '../../mainPage/mainPage';
import { data } from 'autoprefixer';

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
async function setQuery() {
  event.preventDefault();
  const query = event.currentTarget.input.value;
  APIhelpers.query = query;
  const data = await getMovieByQuery.getMovieByQuery();
  createMarkup(data);
}
