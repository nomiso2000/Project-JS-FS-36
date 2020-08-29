import API from '../../../api_services';
import { movieList } from '../../movieList/movieList';
import { refs } from './../../../refs';
import { starterMainPage, createMarkup } from '../../mainPage/mainPage';
import { saveToLocalStorage } from '../../innerPages/ineer_page';
import { APIhelpers } from '../../../helpers';
import { movieListItem } from '../../movieList/movieListItem/movieListItem';
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
        starterMainPage();
        break;
      case 'library':
        // refs.container.innerHTML = '';
        // const watchingArray = JSON.parse(localStorage.getItem('watched'));
        // console.log(watchingArray);
        // const newPromises = watchingArray.reduce((acc, id) => {
        //   acc += API.getMovieByID(id);
        //   return acc;
        // }, '');
        // .then(resolve => {
        //   console.log(resolve);
        //   return resolve.data;
        // });

        // Promise.all([newPromises])
        //   .then(arr => {
        //     console.log(arr);
        //     return arr;
        //   })
        //   .then(data => console.log(data));
        // .then(result => console.log(result));
        const watchingArray = JSON.parse(localStorage.getItem('watched'));
        createMarkup(watchingArray);

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
