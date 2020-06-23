import { POSTER_URL } from '../config/api';
import mark from './mark';

export default function(bg, vote) {
  return `<div class="movie-card_bg"
               style="background-image: url(${POSTER_URL + bg})">
          </div>
          ${mark(vote)}`;
}
