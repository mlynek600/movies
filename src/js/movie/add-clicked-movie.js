export default function(title) {
  const watchedMoviesContainer = document.getElementById('watched-movies');
  watchedMoviesContainer.style.visibility = 'visible';
  const moviesList = document.getElementById('movies-list');
  const span = document.createElement('span');
  span.innerHTML = `<li class=clicked-movies>${title}</li>`;
  moviesList.appendChild(span);
}
