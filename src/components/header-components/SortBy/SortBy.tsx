import React from "react";
import { connect } from "react-redux";
import { sortMoviesAsync } from "../../../actions";
import {
  createMovieSearchParams,
  getCurrentLocationState,
  withParams
} from "../../../utils";

function BasicSortBy(props: any) {
  const sortBySubmit = (e: any) => {
    e.preventDefault();
    const sortBy = e.currentTarget?.value;
    console.log("Sort movie ... by", sortBy);

    const state = getCurrentLocationState(props.location, props.params);
    const path = {
      pathname: `/search/${state.searchQuery}`,
      search: `?${createMovieSearchParams({ sortBy })}`
    };

    props.navigate(path, { replace: true });
    props.onSortMovie();
  };

  const queryParams = new URLSearchParams(props.location.search);
  const sortBy = queryParams.get("sortBy") || "";
  return (
    <>
      <ul className="header--sorting">
        <li>Sort by </li>
        <li>
          <select className="header--sorting-selector" onChange={sortBySubmit} value={sortBy}>
            <option value="">--Please choose an option--</option>
            <option value="release_date">Release date</option>
            <option value="title">Alfabet</option>
          </select>
        </li>
      </ul>
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSortMovie: () => dispatch(sortMoviesAsync())
  };
};

export const SortBy = connect(
  null,
  mapDispatchToProps
)(withParams(BasicSortBy));
