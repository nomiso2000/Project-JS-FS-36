import { APIhelpers } from '../../../helpers';
export const movieListItem = ({
  title,
  // backdrop_path,
  original_title,
  poster_path,
  id,
  release_date,
  vote_average,
}) => {
  if (release_date === undefined) {
    release_date = 'Unreleased yet';
  }
  return `
    <li class="movieListItem" data-id=${id}>
    <div class="image">
    <img src="${
      APIhelpers.urlForIMG + APIhelpers.imgParams + poster_path
    }" alt="">
    </div>
    <h2>${title ? title : original_title}</h2>
    <span class="genres">genres</span>
    <span class="date">${'| ' + release_date}</span>
    <span class="rating">${vote_average}</span>
    </li>
    `;
};
