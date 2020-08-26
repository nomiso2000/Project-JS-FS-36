import API from '../../../api_services';
import { movieList } from '../../movieList/movieList';

export const navigationModule = array => {
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
    const result = array.reduce((acc, item) => {
      acc += itemMarkup(item);
      return acc;
    }, '');
    return `<ul class="navigationList">${result}</ul>`;
  };

  const setActiveLink = target => {
    const activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
    target.classList.add('active');
  };

  const returnMarkup = async link => {
    const container = document.querySelector('.container');
    const data = link.toLowerCase();
    switch (data) {
      case 'home':
        const result = await API.getMovies();
        console.dir(result);
        const markup = movieList(result);
        container.innerHTML = markup;
        break;
      case 'library':
        container.innerHTML = '';
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

  const parent = document.querySelector('.navigation');
  parent.innerHTML = listMarkup();
  addListeners();
};
