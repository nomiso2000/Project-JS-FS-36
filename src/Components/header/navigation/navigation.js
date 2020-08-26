import API from '../../../api_services';
import { movieList } from '../../movieList/movieList';
import { refs } from './../../../refs';

export const navigationModule = array => {
  // Створює розмітку li з масиву
  const itemMarkup = item => {
    return `
    <li data-link=${item} class="navigationListItem  ${
      item === 'Home' ? 'active' : ''
    }" >
    <span>${item.toUpperCase()}</span>
    </li>
    `;
  };

  const listMarkup = () => {
    //для кожного елементу масиву додає li, повертає список з цими лі
    const result = array.reduce((acc, item) => {
      acc += itemMarkup(item);
      return acc;
    }, '');
    return `<ul class="navigationList">${result}</ul>`;
  };

  const setActiveLink = target => {
    // додає клас на вибраний ел
    const activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
    target.classList.add('active');
  };

  const returnMarkup = async link => {
    const data = link.toLowerCase();
    switch (data) {
      case 'home':
        const result = await API.getMovies();
        console.dir(result);
        const markup = movieList(result);
        refs.container.innerHTML = markup;
        break;
      case 'library':
        refs.container.innerHTML = '';
        break;

      default:
        return '';
        break;
    }
  };
  const getLink = e => {
    if (e.target.closest('[data-link]')) {
      const element = e.target.closest('[data-link]');
      setActiveLink(element);
      returnMarkup(e.target.closest('[data-link]').dataset.link);
    } else return;
  };

  const addListeners = () => {
    const list = document.querySelector('.navigationList');
    list.addEventListener('click', getLink);
  };

  refs.navigation.innerHTML = listMarkup();
  addListeners();
};
