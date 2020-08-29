import { APIhelpers } from '../../helpers';
import { movieListItem } from '../movieList/movieListItem/movieListItem';
import API from '../../api_services';
import { movieList } from '../movieList/movieList';
import { mivieListItem } from '../movieList/movieListItem/movieListItem';
import { refs } from '../../refs';
import { singlePage } from '../innerPages/single-film';
import { navigationModule } from '../header/navigation/navigation';
import { saveToLocalStorage } from '../innerPages/ineer_page';

///////////////////////////////////
export async function getId(e) {
  if (e.target.closest('[data-id]')) {
    const filmId = e.target.closest('[data-id]').dataset.id;

    const result = await API.getMovieByID(filmId);
    const newMurk = singlePage(result.data);
    console.log(result);
    refs.container.innerHTML = newMurk;
    // const button_icon = document.querySelector('.button-icon');
    //   button_icon.addEventListener('click', () =>
    //     console.log(e.target.closest('[data-id]').dataset.id),
    //   );
    // } else return;
    // const watchedBtn = document.querySelector('[data-action="watched-films"]');
    // watchedBtn.addEventListener('click', console.log(result.data.id));
    const button_wrapper = document.querySelector('.button-wrapper');
    button_wrapper.addEventListener('click', event =>
      saveToLocalStorage(event, result.data.id),
    );
  } else return;
}
export const starterMainPage = async () => {
  const result = await API.getMovies();

  const markup = movieList(result);

  refs.container.innerHTML = `<ul class="movie_list">${markup}</ul>`;
  const movie_list = document.querySelector('.movie_list');
  movie_list.addEventListener('click', getId);
};

starterMainPage();

export function createMarkup(...data) {
  refs.container.innerHTML = '';
  console.log(data);
  const markup = movieList(data);
  refs.container.insertAdjacentHTML(
    'beforeend',
    `<ul class="movie_list">${markup}</ul>`,
  );
}
