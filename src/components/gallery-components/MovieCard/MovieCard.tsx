import React from "react";
import { connect } from "react-redux";
import { showMovieDetails } from "../../../actions";
import { DeleteMovie } from "./DeleteMovie";
import { EditMovie } from "./EditMovie";

function BasicMovieCard(props: any) {
  const { details, onShowMovieDetails } = props;
  return (
    <div className="movie-card-content">
      <img
        src={details.poster_path}
        alt={details.title}
        onClick={() => onShowMovieDetails(details)}
      />
      <h3 className="movie--title">{details.title}</h3>
      <p className="movie--rating">Rating : {details.vote_average}</p>
      <p className="movie--description">{details.short_description}</p>
      <EditMovie details={details} />
      <DeleteMovie details={details} />
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onShowMovieDetails: (details: any) => dispatch(showMovieDetails(details))
  };
};

export const MovieCard = connect(null, mapDispatchToProps)(BasicMovieCard);
