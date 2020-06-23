import axios from 'axios';
import displayMovies from './display_movies';
import { API_URL, MOVIE_LIST } from '../config/api';
import displayClickedMovies from './display-clicked-movies';

export default function() {
  axios.get(API_URL).then(response => {
    MOVIE_LIST.push(...response.data.results);
    displayMovies(MOVIE_LIST);
    displayClickedMovies();
  });
}
