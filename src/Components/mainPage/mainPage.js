import { APIhelpers } from '../../helpers';
import { movieListItem } from '../movieList/movieListItem/movieListItem';
import API from '../../api_services';
import { movieList } from '../movieList/movieList';
import { refs } from '../../refs';

const starterMainPage = async () => {
  const result = await API.getMovies();
  const markup = movieList(result);
  refs.container.innerHTML = markup;
};

starterMainPage();

export const createMarkup = data => {
  refs.container.innerHTML = '';
  const markup = movieList(data);
  refs.container.insertAdjacentHTML('beforeend', markup);
};
