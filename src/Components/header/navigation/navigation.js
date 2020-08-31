import API from '../../../api_services';
import { movieList } from '../../movieList/movieList';
import { refs } from './../../../refs';
import { starterMainPage, createMarkup, getId } from '../../mainPage/mainPage';
import { saveToLocalStorage } from '../../innerPages/ineer_page';
import { APIhelpers } from '../../../helpers';
import { movieListItem } from '../../movieList/movieListItem/movieListItem';
import {
  hideSearch,
  showSearch,
  hideBtns,
  showBtns,
} from '../lib_buttons/hidden';
import { displayWatched } from '../lib_buttons/process';
import {
  addHeaderClass,
  removeHeaderClass,
  removeSingleHeaderClass,
} from '../header';
import { Pagination } from '../../pagination/pagination';

export const navigationModule = array => {
  const itemMarkup = item => {
    return `
    <li data-link=${item} class="navigationListItem  ${
      item === 'Home' ? 'active' : ''
    } ${item === 'Home' ? 'js-home' : 'js-library'}" >
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
    const data = link.toLowerCase();
    switch (data) {
      case 'home':
        removeHeaderClass();
        removeSingleHeaderClass();

        starterMainPage();
        showSearch();
        hideBtns();
        APIhelpers.page = 1;
        refs.pagintatonClick.classList.remove('hideSearch');

        break;
      case 'library':
        addHeaderClass();
        displayWatched();
        hideSearch();
        showBtns();

        refs.pagintatonClick.classList.add('hideSearch');

        const watchingArray = JSON.parse(localStorage.getItem('watched')) || [];

        const sizeOfPagination = Math.ceil(watchingArray.length / 100);

        Pagination.Init(sizeOfPagination, 'library');

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
