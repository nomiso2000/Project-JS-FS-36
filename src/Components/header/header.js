const { refs } = require('../../refs');

export function addHeaderClass() {
  refs.header.classList.add('header-libraty-img');
}
export function removeHeaderClass() {
  refs.header.classList.remove('header-libraty-img');
}
