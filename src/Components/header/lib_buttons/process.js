import { watchedListItem } from '../../templates/watched-page';

const displayWatched = () => {
  const container = document.createElement('ul');
  container.classList.add('w_films');
  const mainContainer = document.querySelector('.container');
  mainContainer.innerHTML = '';
  mainContainer.appendChild(container);

  const filmsWatched = [...JSON.parse(localStorage.getItem('watched'))];
  const films = filmsWatched.map(item => watchedListItem(item));
  const filmUl = document.querySelector('.w_films');
  filmUl.innerHTML = '';
  filmUl.insertAdjacentHTML('afterbegin', films);
};

const displayQueue = () => {
  const container = document.createElement('ul');
  container.classList.add('w_films');
  const mainContainer = document.querySelector('.container');
  mainContainer.innerHTML = '';
  mainContainer.appendChild(container);

  const filmsQueue = [...JSON.parse(localStorage.getItem('queue'))];
  const films = filmsQueue.map(item => watchedListItem(item));
  const filmUl = document.querySelector('.w_films');
  filmUl.innerHTML = '';
  filmUl.insertAdjacentHTML('afterbegin', films);
};

// btn
const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');
watchedBtn.addEventListener('click', displayWatched);
queueBtn.addEventListener('click', displayQueue);
