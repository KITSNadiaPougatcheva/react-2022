import React from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

export const withParams = function (Component: any) {
  return (props: any) => {
    return (
      <Component
        {...props}
        params={useParams()}
        location={useLocation()}
        navigate={useNavigate()}
      />
    );
  };
};

export const getCurrentLocationState = (location: any, params: any): any => {
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = params.query || "";
  const sortBy = queryParams.get("sortBy") || "";
  const genre = queryParams.get("genre") || "";
  const movie = queryParams.get("movie") || "";
  return { searchQuery, sortBy, genre, movie };
};

export const createMovieSearchParams = ({ genre, sortBy, movie }: any): any => {
  const queryParams = new URLSearchParams(location.search);
  return createSearchParams({
    sortBy: sortBy ?? queryParams.get("sortBy") ?? "",
    genre: genre ?? queryParams.get("genre") ?? "",
    movie: movie ?? queryParams.get("movie") ?? ""
  });
};

export const getSearchQuery = () => {
  const pathsArr = window.location.pathname.split("/");
  const [, basePath, query] = pathsArr;
  return basePath === "search" ? query : "";
};

export const getGenreQueryParam = () => {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get("genre") || "";
};

export const getSortByQueryParam = () => {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get("sortBy") || "";
};

export const getMovieIdQueryParam = () => {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get("movie") || "";
};
