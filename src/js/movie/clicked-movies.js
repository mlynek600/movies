import addClickedMovie from './add-clicked-movie';

export default function(title) {
  const prevStorage = localStorage.getItem('title');
  if (prevStorage) {
    if (!prevStorage.includes(title)) {
      localStorage.setItem('title', `${prevStorage}, ${title}`);
      addClickedMovie(title);
    }
  } else {
    localStorage.setItem('title', title);
    addClickedMovie(title);
  }
}
