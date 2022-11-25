import React from "react";
import { connect } from "react-redux";
import { getAllMoviesAsync } from "../../../actions";
import { createMovieSearchParams, withParams } from "../../../utils";
import { DeleteMovie } from "./DeleteMovie";
import { EditMovie } from "./EditMovie";

function BasicMovieCard(props: any) {
  const { details, onShowMovieDetails, navigate, params } = props;

  const showMovieDetails = () => {
    const path = {
      pathname: `/search/${params.query || ""}`,
      search: `?${createMovieSearchParams({ movie: details.id })}`
    };
    navigate(path, { replace: true });
    onShowMovieDetails();
    return false;
  };

  return (
    <div className="movie-card-content">
      <img
        src={details.poster_path}
        alt={details.title}
        onClick={() => showMovieDetails()}
      />
      <h3 className="movie--title">{details.title}</h3>
      <p className="movie--rating">
        Rating : {details.vote_average} | Release date : {details.release_date}
      </p>
      <p className="movie--description">{details.tagline}</p>
      <EditMovie details={details} />
      <DeleteMovie details={details} />
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onShowMovieDetails: () => dispatch(getAllMoviesAsync())
  };
};

export const MovieCard = connect(
  null,
  mapDispatchToProps
)(withParams(BasicMovieCard));
