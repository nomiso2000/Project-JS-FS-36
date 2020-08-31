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
import { addSingleHeaderClass } from '../header/header';

export async function getId(e) {
  addSingleHeaderClass();
  if (e.target.closest('[data-id]')) {
    const filmId = e.target.closest('[data-id]').dataset.id;

    const result = await API.getMovieByID(filmId);
    const newMurk = singlePage(result.data);

    refs.container.innerHTML = newMurk;
    const watchedBtn = document.querySelector('[data-action="watched-films"]');
    const queueBtn = document.querySelector('[data-action="queue-films"]');
    let currentArray = [];
    let jsonSet = localStorage.getItem('watched');
    if (jsonSet) {
      currentArray = JSON.parse(jsonSet);
    }
    if (currentArray.find(film => film.id === Number.parseInt(filmId))) {
      watchedBtn.classList.add('item-exist');
      watchedBtn.textContent = `Remove to watched`;
    } else {
      watchedBtn.classList.remove('item-exist');
      watchedBtn.textContent = `Add from watched`;
    }
    currentArray = [];
    jsonSet = localStorage.getItem('queue');
    if (jsonSet) {
      currentArray = JSON.parse(jsonSet);
    }
    if (currentArray.find(film => film.id === Number.parseInt(filmId))) {
      queueBtn.classList.add('item-exist');
      queueBtn.textContent = `Remove to queue`;
    } else {
      queueBtn.classList.remove('item-exist');
      queueBtn.textContent = `Add from queue`;
    }
    const button_wrapper = document.querySelector('.button-wrapper');
    button_wrapper.addEventListener('click', event =>
      saveToLocalStorage(event, result.data),
    );
  } else return;
}

export const starterMainPage = async () => {
  const result = await API.getMoviesForPlag();
  let totalResults = Math.ceil(result.data.total_results / 20);
  const context = 'mainPage';
  Pagination.Init(totalResults, context);

  const markupResult = await API.getMovies();
  const markup = movieList(markupResult);
  hideBtns();

  refs.container.innerHTML = `<ul class="movies_list">${markup}</ul>`;
  const movie_list = document.querySelector('.movies_list');
  movie_list.addEventListener('click', getId);
};

starterMainPage();

export function createMarkup(data) {
  refs.container.innerHTML = '';
  const markup = movieList(data);
  refs.container.insertAdjacentHTML(
    'beforeend',
    `<ul class="movies_list">${markup}</ul>`,
  );
}
