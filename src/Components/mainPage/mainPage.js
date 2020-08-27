import { APIhelpers } from '../../helpers';
import { movieListItem } from '../movieList/movieListItem/movieListItem';
import API from '../../api_services';
import { movieList } from '../movieList/movieList';
import { refs } from '../../refs';
import { singlePage } from '../innerPages/single-film';
///////////////////////////////////
function getId() {
  refs.container.addEventListener('click', async e => {
    const filmId = e.target.dataset.id;
    const result = await API.getMovieByID(filmId);
    const newMurk = singlePage(result.data);
    refs.container.innerHTML = newMurk;
  });
}

const starterMainPage = async () => {
  const result = await API.getMovies();
  const markup = movieList(result);
  refs.container.innerHTML = markup;
  getId();
};

starterMainPage();

export const createMarkup = data => {
  refs.container.innerHTML = '';
  const markup = movieList(data);
  refs.container.insertAdjacentHTML('beforeend', markup);
};
