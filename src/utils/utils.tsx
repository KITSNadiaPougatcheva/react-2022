import React from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

export const withParams = function (Component: any) {
  return (props: any) => (
    <Component
      {...props}
      params={useParams()}
      location={useLocation()}
      navigate={useNavigate()}
    />
  );
};

export const getCurrentLocationState = (location: any, params: any) => {
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = params.query || "";
  const sortBy = queryParams.get("sortBy") || "";
  const genre = queryParams.get("genre") || "";
  return { searchQuery, sortBy, genre };
};

export const createMovieSearchParams = ({ genre, sortBy }: any): any => {
  const queryParams = new URLSearchParams(location.search);
  return createSearchParams({
    sortBy: sortBy ?? queryParams.get("sortBy") ?? "",
    genre: genre ?? queryParams.get("genre") ?? ""
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
