import { movieListItem } from './movieListItem/movieListItem';

export const movieList = movies =>{
return  movies.reduce((acc, movie) => {
    acc += movieListItem(movie);
    return acc;
  }, '');}
