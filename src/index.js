import './css/styles.css';
import { getPopularMovies } from './js/api/movieApi';
import { generateImgPath } from './js/utils';
import moviesListTemplate from './js/components/moviesList.hbs';
import { Pagination } from './js/pagination';

const moviesListRef = document.querySelector('.movies-wrapper');
const nextPageRef = document.querySelector('.next-page');
const prevPageRef = document.querySelector('.prev-page');
const currentPageRef = document.querySelector('.current-page');

const handlePageChange = currentPage => {
  getPopularMovies(currentPage).then(({ data }) => {
    renderMovieList(data.results);
  });
};
const moviePagination = new Pagination({
  total: 100,
  onChange(value) {
    handlePageChange(value);
    currentPageRef.textContent = value;
  },
});

const renderMovieList = movies => {
  const moviesList = movies.map(movie => {
    const { original_title, poster_path } = movie;

    return {
      original_title,
      poster: generateImgPath(poster_path),
    };
  });

  moviesListRef.innerHTML = moviesListTemplate(moviesList);
};


nextPageRef.addEventListener('click', () => {
  moviePagination.nextPage();
});

prevPageRef.addEventListener('click', () => {
  moviePagination.prevPage();
});

getPopularMovies().then(({ data }) => {
  const { results: movies } = data;

  renderMovieList(movies);
});
