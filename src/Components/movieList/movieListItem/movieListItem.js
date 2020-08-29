import { APIhelpers } from '../../../helpers';
export const movieListItem = ({
  title,
  // backdrop_path,
  original_name,
  poster_path,
  release_date,
  vote_average}) => {
    if(release_date === undefined) {
      return `<li class="movieListItem">
      <div class="image">
      <img src="${
        APIhelpers.baseURL + APIhelpers.imgParams + poster_path
      }" alt="">
      </div>
      <h2>${title || original_name}</h2>
      <span class="genres">genres</span>
      <span class="date">${'| Unreleased yet'}</span>
      <span class="rating">${vote_average}</span>`
    }
  // if (backdrop_path === null) {
  //   backdrop_path = poster_path;
  // }
  // function genresMapper(genres) {
  //   const result = genres.map(genre => genre.name);
  //   return result;
  // }
  return `
      <li class="movieListItem">
    <div class="image">
    <img src="${
      APIhelpers.baseURL + APIhelpers.imgParams + poster_path
    }" alt="">
    </div>
    <h2>${title || original_name}</h2>
    <span class="genres">genres</span>
    <span class="date">${'| ' + release_date}</span>
    <span class="rating">${vote_average}</span>
    </li>
    `;
};
