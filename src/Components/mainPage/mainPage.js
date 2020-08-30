import { APIhelpers } from '../../helpers';
import { movieListItem } from '../movieList/movieListItem/movieListItem';
import API from '../../api_services';
import { movieList } from '../movieList/movieList';
import { mivieListItem } from '../movieList/movieListItem/movieListItem';
import { refs } from '../../refs';
import { singlePage } from '../innerPages/single-film';
import { navigationModule } from '../header/navigation/navigation';
import { saveToLocalStorage } from '../innerPages/ineer_page';
import { Pagination } from '../pagination/pagination';
import { hideBtns } from '../header/lib_buttons/hidden';

export async function getId(e) {
  if (e.target.closest('[data-id]')) {
    const filmId = e.target.closest('[data-id]').dataset.id;

    const result = await API.getMovieByID(filmId);
    console.log(result);
    const newMurk = singlePage(result.data);
    console.log(result);
    refs.container.innerHTML = newMurk;
    const button_wrapper = document.querySelector('.button-wrapper');
    button_wrapper.addEventListener('click', event =>
      saveToLocalStorage(event, result.data),
    );
  } else return;
}
export const starterMainPage = async () => {
  const result = await API.getMovies();

  const markup = movieList(result);
  hideBtns();

  refs.container.innerHTML = `<ul class="movies_list">${markup}</ul>`;
  const movie_list = document.querySelector('.movies_list');
  movie_list.addEventListener('click', getId);
};

starterMainPage();

export function createMarkup(data) {
  refs.container.innerHTML = '';
  console.log(data);
  const markup = movieList(data);
  refs.container.insertAdjacentHTML(
    'beforeend',
    `<ul class="movies_list">${markup}</ul>`,
  );
}
