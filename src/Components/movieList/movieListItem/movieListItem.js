import { APIhelpers } from '../../../helpers';
export const movieListItem = ({
  title,
  poster_path,
  id,
  release_date,
  vote_average,
  genres,
  name,
}) => {
  if (release_date === undefined) {
    release_date = 'Unreleased yet';
  }
  if (poster_path === null) {
    poster_path = '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg';
  }
  return `
    <li class="movieListItem" data-id=${id}>
    <div class="image">
    <img class="img" src="${
      APIhelpers.urlForIMG + APIhelpers.imgParams + poster_path
    }" alt="">
    </div>
    <h2>${
      title ? (title.length > 15 ? title.slice(0, 15) + '...' : title) : name
    }</h2>
    <span class="genres">${genres
      .map(item => (item ? item.name : 'other'))
      .splice(0, 2)
      .join(', ')}</span>
    <span class="date">${'| ' + release_date}</span>
    <span class="rating">${vote_average}</span>
    </li>
    `;
};
