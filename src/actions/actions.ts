import {
    getGenreQueryParam,
    getMovieIdQueryParam,
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
  
  const manageMovieDetails = (dispatch: any) => {
    const selectedMovieId = getMovieIdQueryParam();
    if (selectedMovieId) {
      MovieService.getMovieDetails(getMovieIdQueryParam()).then(movieDetails =>
        dispatch(showMovieDetails(movieDetails))
      );
    } else {
      dispatch(hideMovieDetails());
    }
  };
  
  const findMoviesWithAllQueryParams = (dispatch: any): Promise<any> => {
    manageMovieDetails(dispatch);
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
        .then(() => findMoviesWithAllQueryParams(dispatch))
        .then(movies => dispatch(moviesRefreshed(movies)))
        .catch(setError);
    };
  };
  
  export const editMovieAsync = (movie: any) => {
    return (dispatch: any) => {
      MovieService.updateMovieAsync(movie)
        .then(() => findMoviesWithAllQueryParams(dispatch))
        .then(movies => dispatch(moviesRefreshed(movies)))
        .catch(setError);
    };
  };
  
  export const getAllMoviesAsync = () => {
    return (dispatch: any) => {
      findMoviesWithAllQueryParams(dispatch)
        .then(movies => dispatch(moviesRefreshed(movies)))
        .catch(setError);
    };
  };