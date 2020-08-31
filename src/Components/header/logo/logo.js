const { starterMainPage } = require('../../mainPage/mainPage');
const { showSearch } = require('../lib_buttons/hidden');
const { refs } = require('../../../refs');
const { APIhelpers } = require('../../../helpers');
const { Pagination } = require('../../pagination/pagination');
const { removeSingleHeaderClass } = require('../header');

const logo = document.querySelector('.logo');
logo.addEventListener('click', realizeClick);
function realizeClick() {
  starterMainPage();
  showSearch();
  removeSingleHeaderClass();
  APIhelpers.page = 1;
  const activeElement = document.querySelector('.active');
  activeElement.classList.remove('active');
  const jsHome = document.querySelector('.js-home');
  jsHome.classList.add('active');
  refs.pagintatonClick.classList.remove('hideSearch');
}
