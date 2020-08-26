import { APIhelpers } from '../../../helpers';
export const movieListItem = ({
  title,
  backdrop_path,
  original_name,
  poster_path,
}) => {
  if (backdrop_path === null) {
    backdrop_path = poster_path;
  }
  return `
    <li class="movieListItem">
    <h2>${title || original_name}</h2>
    <img src="${
      APIhelpers.baseURL + APIhelpers.imgParams + backdrop_path
    }" alt="">
  
    </li>
    `;
};
