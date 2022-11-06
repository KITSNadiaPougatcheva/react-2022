import React, { useContext } from "react";
import { connect } from "react-redux";
import { hideMovieDetails } from "../../../actions";
import { State } from "../../../state/State";
import {
  AppHideMovieDetailsContext,
  AppMovieDetailsContext
} from "../../context";
import { Logo } from "../Logo";

function BasicMovieDetailsHeader(props: any) {
  const showMovieDetails = useContext(AppMovieDetailsContext);
  const toggleMovieDetails = useContext(AppHideMovieDetailsContext);
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
            <img src={showMovieDetails.details.img} alt="test moview" />
            <div className="movie--details">
              <h2 className="movie--title">{showMovieDetails.details.title}</h2>
              <div className="movie--brif-description">
                {showMovieDetails.details.short_description}
              </div>
              <div className="movie--year">{showMovieDetails.details.year}</div>
              <div className="movie--range">
                Rating: {showMovieDetails.details.range}
              </div>
              <div className="movie--long-description">
                {showMovieDetails.details.description}
              </div>
            </div>
          </div>

          <div className="header-bottom"></div>
        </header>
      )}
    </>
  );
}

const mapStateToProps = ({ showMovieDetails }: State) => ({ showMovieDetails });
const mapDispatchToProps = (dispatch: any) => {
  return {
    onHideMovieDetails: () => dispatch(hideMovieDetails())
  };
};

export const MovieDetailsHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicMovieDetailsHeader);
