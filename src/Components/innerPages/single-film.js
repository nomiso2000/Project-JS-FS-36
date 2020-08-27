export const singlePage = ({
  id,
  poster_path,
  title,
  vote_count,
  original_title,
  genres,
  overview,
  popularity,
  vote_average,
}) => {
  function genresMapper(genres) {
    const result = genres.map(genre => genre.name);
    return result;
  }
  return `<section class="single-page" data-id="${id}">
    <div class="poster-wrapper">
      <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="">
    </div>
    <div class="description-wrapper">
      <h2 class="film-title">${title}</h2>
      <div class="vote-wrapper">
        <span class="titles vote-titles">vote / votes: </span> <span class="votes-numbers">${vote_average} /
          ${vote_count}</span>
      </div>
      <div class="popularity-wrapper">
        <span class="titles film-popularity">popularity: </span> <span class="popularity-score">${popularity}</span>
      </div>

      <div class="original-film-wrapper">
        <span class="titles original-film-titles">original title: </span> <span
          class="original-film-name">${original_title}</span>
      </div>

      <div class="film-genre-wrapper">
        <span class="titles film-genre">genres: </span> <span class="genre-list">${genresMapper(
          genres,
        ).join(', ')}</span>
      </div>

      <h3>About</h3>
      <p class="film-description">${overview}</p>
      <div class="button-wrapper">
        <button type="button" class="video-icon button-icon" data-id="${id}" data-action="watched-films">Add to
          watched</button>
        <button type="button" class="calendar-icon button-icon" data-id="${id}" data-action="queue-films">Add to
          queue</button>
      </div>
  </section>
  `;
};
