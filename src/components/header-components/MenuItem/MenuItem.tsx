import React from "react";
import { connect } from "react-redux";
import { getAllMoviesAsync } from "../../../actions";
import {
  createMovieSearchParams,
  getCurrentLocationState,
  withParams
} from "../../../utils";

const BasicMenuItem = (props: any) => {
  const { genre: selectedGenre, searchQuery } = getCurrentLocationState(
    props.location,
    props.params
  );

  const filterMovieSubmit = (e: any) => {
    e.preventDefault();
    const genre = e.currentTarget?.getAttribute("data-value");
    console.log("Filter movie ... by", genre);
    const path = {
      pathname: `/search/${searchQuery}`,
      search: `?${createMovieSearchParams({ genre })}`
    };
    props.navigate(path, { replace: true });
    props.onFilterMovie();
  };
  return (
    <li>
      <a
        id={props.id}
        data-value={props.text}
        className={selectedGenre === props.text ? "selected" : ""}
        onClick={filterMovieSubmit}
        href={props.href}
      >
        {props.text}
      </a>
    </li>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFilterMovie: () => dispatch(getAllMoviesAsync())
  };
};

export const MenuItem = connect(
  ({ genre }) => ({
    genre
  }),
  mapDispatchToProps
)(withParams(BasicMenuItem));
