import {
  getGenreQueryParam,
  getSearchQuery,
  getSortByQueryParam,
  MovieService
} from "../utils";
import {
  ERROR,
  GENRE_SELECTED,
  HIDE_MOVIE_DETAILS,
  MOVIES_REFRESHED,
  QUERY_SELECTED,
  SHOW_MOVIE_DETAILS,
  SORT_MOVIES_SELECTED
} from "./action-types";

const findMoviesWithAllQueryParams = (): Promise<any> => {
  return MovieService.findMoviesAsync({
    sortBy: getSortByQueryParam(),
    genre: getGenreQueryParam(),
    query: getSearchQuery()
  });
};

export const showMovieDetails = (selectedMovieDetails: any) => ({
  type: SHOW_MOVIE_DETAILS,
  payload: { selectedMovieDetails, showMovieDetails: true }
});

export const hideMovieDetails = () => ({
  type: HIDE_MOVIE_DETAILS,
  payload: { showMovieDetails: false }
});

export const moviesRefreshed = (movies: any[]) => ({
  type: MOVIES_REFRESHED,
  payload: { movies }
});

export const sortMoviesSelected = (sortBy: string) => ({
  type: SORT_MOVIES_SELECTED,
  payload: { sortBy }
});

export const findMoviesSelected = (query: string) => ({
  type: QUERY_SELECTED,
  payload: { query }
});

export const filterMoviesSelected = (genre: string) => ({
  type: GENRE_SELECTED,
  payload: { genre }
});

export const setError = (error: any) => ({
  type: ERROR,
  error
});

export const addMovieAsync = (movie: any) => {
  return (dispatch: any) => {
    MovieService.addMovieAsync({
      poster_path: "http://posterpath.com/123",
      runtime: 123,
      genres: ["Action"],
      ...movie
    })
      .then(movie => dispatch(moviesRefreshed([movie])))
      .catch(setError);
  };
};

export const deleteMovieAsync = (id: string) => {
  return (dispatch: any) => {
    MovieService.deleteMovieAsync(id)
      .then(() => findMoviesWithAllQueryParams())
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError);
  };
};

export const editMovieAsync = (movie: any) => {
  return (dispatch: any) => {
    MovieService.updateMovieAsync(movie)
      .then(() => findMoviesWithAllQueryParams())
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError);
  };
};

export const getAllMoviesAsync = () => {
  return (dispatch: any) => {
    findMoviesWithAllQueryParams()
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError);
  };
};

export const sortMoviesAsync = () => {
  return (dispatch: any) => {
    findMoviesWithAllQueryParams()
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError);
  };
};

export const findMoviesAsync = () => {
  return (dispatch: any) => {
    findMoviesWithAllQueryParams()
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError);
  };
};

export const filterMoviesAsync = () => {
  return (dispatch: any) => {
    //dispatch(filterMoviesSelected(genre));

    findMoviesWithAllQueryParams()
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError);
  };
};
