const { refs } = require('../../refs');

export function addHeaderClass() {
  refs.header.classList.add('new_image');
}
export function removeHeaderClass() {
  refs.header.classList.remove('new_image');
}

export function addSingleHeaderClass() {
  refs.header.classList.add('single_film_img');
}
export function removeSingleHeaderClass() {
  refs.header.classList.remove('single_film_img');
}
