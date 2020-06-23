import card from './movie-card';
import mark from './mark';
import clickedMovies from './clicked-movies';

export default function(movieArray) {
  const mainDiv = document.getElementById('main-content');
  movieArray.forEach((item, i) => {
    const { title, poster_path, vote_average } = item;
    const div = document.createElement('div');
    div.className = 'movie-card';
    div.innerHTML = card(poster_path, vote_average);
    mainDiv.appendChild(div);
    div.addEventListener('click', () => clickedMovies(title));
  });
}
