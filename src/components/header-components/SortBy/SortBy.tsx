import React from "react";
import { connect } from "react-redux";
import { sortMoviesAsync } from "../../../actions";

function BasicSortBy(props: any) {
  const sortBySubmit = (e: any) => {
    e.preventDefault();
    const sortByValue = e.currentTarget?.value;
    console.log("Sort movie ... by", sortByValue);
    props.onSortMovie(sortByValue);
  };
  return (
    <>
      <ul className="header--sorting">
        <li>Sort by </li>
        <li>
          <select className="header--sorting-selector" onChange={sortBySubmit}>
            <option value="">--Please choose an option--</option>
            <option value="release_date">Release date</option>
            <option value="vote_average">Rating</option>
          </select>
        </li>
      </ul>
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSortMovie: (sortBy: string) =>
      dispatch(sortMoviesAsync({ payload: { sortBy } }))
  };
};

export const SortBy = connect(null, mapDispatchToProps)(BasicSortBy);
