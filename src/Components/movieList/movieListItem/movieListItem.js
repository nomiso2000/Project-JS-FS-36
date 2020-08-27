import { APIhelpers } from '../../../helpers';
export const movieListItem = ({
  title,
  backdrop_path,
  original_name,
  poster_path,
  id,
}) => {
  if (backdrop_path === null) {
    backdrop_path = poster_path;
  }
  return `
    <li class="movieListItem" data-id=${id}>
    <h2>${title || original_name}</h2>
    <img src="${
      APIhelpers.urlForIMG + APIhelpers.imgParams + backdrop_path
    }" alt="">

    </li>
    `;
};
