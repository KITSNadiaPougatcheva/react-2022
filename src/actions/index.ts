import { StateChange } from "../state/StateChange";
import { MovieService } from "../utils/MovieService";
import {
  ERROR,
  GENRE_SELECTED,
  HIDE_MOVIE_DETAILS,
  MOVIES_REFRESHED,
  QUERY_SELECTED,
  SHOW_MOVIE_DETAILS,
  SORT_MOVIES_SELECTED
} from "./action-types";

export const showMovieDetails = (selectedMovieDetails: any) => ({
  type: SHOW_MOVIE_DETAILS,
  payload: { selectedMovieDetails }
});

export const hideMovieDetails = () => ({
  type: HIDE_MOVIE_DETAILS
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

export const getAllMoviesAsync = () => {
  return (dispatch: any) => {
    MovieService.findMoviesAsync({})
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError);
  };
};

export const sortMoviesAsync = ({ payload: { sortBy = "" } }: StateChange) => {
  return (dispatch: any, getState: any) => {
    dispatch(sortMoviesSelected(sortBy));
    const { genre, query } = getState();

    MovieService.findMoviesAsync({ sortBy, genre, query })
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError);
  };
};

export const findMoviesAsync = ({ payload: { query = "" } }: StateChange) => {
  return (dispatch: any, getState: any) => {
    dispatch(findMoviesSelected(query));
    const { genre, sortBy } = getState();

    MovieService.findMoviesAsync({ sortBy, genre, query })
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError);
  };
};

export const filterMoviesAsync = ({ payload: { genre = "" } }: StateChange) => {
  return (dispatch: any, getState: any) => {
    dispatch(filterMoviesSelected(genre));
    const { query, sortBy } = getState();

    MovieService.findMoviesAsync({ sortBy, genre, query })
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError);
  };
};
