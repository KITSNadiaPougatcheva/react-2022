import React from "react";
import { connect } from "react-redux";
import { filterMoviesAsync } from "../../../actions";

const BasicMenuItem = (props: any) => {
  const { genre: selectedGenre } = props;

  const filterMovieSubmit = (e: any) => {
    e.preventDefault();
    const filter = e.currentTarget?.getAttribute("data-value");
    console.log("Filter movie ... by", filter);
    props.onFilterMovie(filter);
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
    onFilterMovie: (genre: string) =>
      dispatch(filterMoviesAsync({ payload: { genre } }))
  };
};

export const MenuItem = connect(
  ({ genre }) => ({
    genre
  }),
  mapDispatchToProps
)(BasicMenuItem);
