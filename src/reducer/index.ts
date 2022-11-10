import {
  ERROR,
  GENRE_SELECTED,
  HIDE_MOVIE_DETAILS,
  MOVIES_REFRESHED,
  QUERY_SELECTED,
  SHOW_MOVIE_DETAILS,
  SORT_MOVIES_SELECTED
} from "../actions/action-types";

export const rootReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SHOW_MOVIE_DETAILS:
      return {
        ...state,
        showMovieDetails: true,
        selectedMovieDetails: action.payload.selectedMovieDetails
      };
    case HIDE_MOVIE_DETAILS:
      return {
        ...state,
        showMovieDetails: false
      };
    case GENRE_SELECTED:
      return {
        ...state,
        genre: action.payload.genre
      };
    case ERROR:
      return {
        ...state,
        error: action.error
      };
    case QUERY_SELECTED:
      return {
        ...state,
        query: action.payload.query
      };
    case SORT_MOVIES_SELECTED:
      return {
        ...state,
        sortBy: action.payload.sortBy
      };
    case MOVIES_REFRESHED:
      return {
        ...state,
        movies: action.payload.movies
      };
    default:
      return state;
  }
};
