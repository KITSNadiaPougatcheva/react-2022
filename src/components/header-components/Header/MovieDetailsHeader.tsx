import React from "react";
import { connect } from "react-redux";
import { hideMovieDetails } from "../../../actions";
import { State } from "../../../state/State";
import { Logo } from "../Logo";

function BasicMovieDetailsHeader(props: any) {
  return (
    <>
      {!!props.showMovieDetails && (
        <header>
          <div className="header">
            <Logo />
            <input
              className="movie-details--close-btn"
              type="button"
              value="X"
              onClick={props.onHideMovieDetails}
            />
          </div>

          <div className="movie-details-header-content">
            <img
              src={props.selectedMovieDetails.poster_path}
              alt="test movie"
            />
            <div className="movie--details">
              <h2 className="movie--title">
                {props.selectedMovieDetails.title}
              </h2>
              <div className="movie--brif-description">
                {props.selectedMovieDetails.tagline}
              </div>
              <div className="movie--year">
                {props.selectedMovieDetails.release_date}
              </div>
              <div className="movie--range">
                Rating: {props.selectedMovieDetails.vote_average}
              </div>
              <div className="movie--long-description">
                {props.selectedMovieDetails.overview}
              </div>
            </div>
          </div>
          <div className="header-bottom"></div>
        </header>
      )}
    </>
  );
}

const mapStateToProps = ({
  showMovieDetails,
  selectedMovieDetails
}: State) => ({ showMovieDetails, selectedMovieDetails });
const mapDispatchToProps = (dispatch: any) => {
  return {
    onHideMovieDetails: () => dispatch(hideMovieDetails())
  };
};

export const MovieDetailsHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicMovieDetailsHeader);
