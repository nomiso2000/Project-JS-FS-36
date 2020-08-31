import { watchedListItem } from '../../templates/watched-page';
import { createMarkup, getId } from '../../mainPage/mainPage';

export const displayWatched = () => {
  // const container = document.createElement('ul');
  // container.classList.add('w_films');
  // const mainContainer = document.querySelector('.container');
  // mainContainer.innerHTML = '';
  // mainContainer.appendChild(container);
  watchedBtn.classList.add('active_btn');
  queueBtn.classList.remove('active_btn');
  const filmsWatched = JSON.parse(localStorage.getItem('watched')) || [];

  createMarkup(filmsWatched);
  const movie_list = document.querySelector('.movies_list');
  movie_list.addEventListener('click', getId);
  // const films = filmsWatched.map(item => watchedListItem(item));
  // const filmUl = document.querySelector('.w_films');
  // filmUl.innerHTML = '';
  // filmUl.insertAdjacentHTML('afterbegin', films);
};

const displayQueue = () => {
  // const container = document.createElement('ul');
  // container.classList.add('w_films');
  // const mainContainer = document.querySelector('.container');
  // mainContainer.innerHTML = '';
  // mainContainer.appendChild(container);
  watchedBtn.classList.remove('active_btn');
  queueBtn.classList.add('active_btn');

  const filmsQueue = JSON.parse(localStorage.getItem('queue')) || [];
  createMarkup(filmsQueue);
  const movie_list = document.querySelector('.movies_list');
  movie_list.addEventListener('click', getId);
  // const films = filmsQueue.map(item => watchedListItem(item));
  // const filmUl = document.querySelector('.w_films');
  // filmUl.innerHTML = '';
  // filmUl.insertAdjacentHTML('afterbegin', films);
};

// btn
const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');
watchedBtn.addEventListener('click', displayWatched);
queueBtn.addEventListener('click', displayQueue);
