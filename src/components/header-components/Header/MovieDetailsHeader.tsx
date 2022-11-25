import React from "react";
import { connect } from "react-redux";
import { hideMovieDetails } from "../../../actions";
import { State } from "../../../state/State";
import { createMovieSearchParams, withParams } from "../../../utils";
import { Logo } from "../Logo";

function BasicMovieDetailsHeader(props: any) {
  const { selectedMovieDetails, onHideMovieDetails, navigate, params } = props;

  const hideMovieDetails = () => {
    const path = {
      pathname: `/search/${params.query || ""}`,
      search: `?${createMovieSearchParams({ movie: "" })}`
    };
    navigate(path, { replace: true });
    onHideMovieDetails();
    return false;
  };

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
              onClick={hideMovieDetails}
            />
          </div>

          <div className="movie-details-header-content">
            <img src={selectedMovieDetails.poster_path} alt="test movie" />
            <div className="movie--details">
              <h2 className="movie--title">{selectedMovieDetails.title}</h2>
              <div className="movie--brif-description">
                {selectedMovieDetails.tagline}
              </div>
              <div className="movie--year">
                {selectedMovieDetails.release_date}
              </div>
              <div className="movie--range">
                Rating: {selectedMovieDetails.vote_average}
              </div>
              <div className="movie--long-description">
                {selectedMovieDetails.overview}
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
)(withParams(BasicMovieDetailsHeader));
