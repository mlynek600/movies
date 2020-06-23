export default function() {
  if (localStorage.getItem('title')) {
    const moviesArr = localStorage.getItem('title').split(', ');
    const moviesList = document.getElementById('movies-list');
    const watchedMoviesContainer = document.getElementById('watched-movies');
    watchedMoviesContainer.style.visibility = 'visible';
    moviesArr.map(item => {
      const span = document.createElement('span');
      span.innerHTML = `<li class=clicked-movies>${item}</li>`;
      moviesList.appendChild(span);
    });
  }
}
