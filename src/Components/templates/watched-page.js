export const watchedListItem = ({ id, backdrop_path, title, vote_average }) => {
  return ` <li data-id="${id}">
      <div class="poster-wrapper">
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="movie poster image">
        <div>
          <h2 class="film-title">${title}</h2>
          <p class="film-vote">${vote_average}</p>
        </div>
      </div>
    </li>
    `;
};
