import { APIhelpers } from '../../../helpers';
import getMovieByQuery from '../../../api_services';
import { data } from 'autoprefixer';

const searchInput = document.querySelector('#search-form');
searchInput.addEventListener('submit', setQuery);

function setQuery() {
  event.preventDefault();
  const query = event.currentTarget.input.value;
  console.log(query);
  APIhelpers.query = query;
  getMovieByQuery
    .getMovieByQuery()

    .then(data => console.log(data));
}
