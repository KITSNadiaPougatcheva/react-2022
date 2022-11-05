import React, { useContext } from "react";
import {
  AppHideMovieDetailsContext,
  AppMovieDetailsContext
} from "../../context";
import { Logo } from "../Logo";

export function MovieDetailsHeader() {
  const showMovieDetails = useContext(AppMovieDetailsContext);
  const toggleMovieDetails = useContext(AppHideMovieDetailsContext);
  return (
    <>
      {showMovieDetails.show && (
        <header>
          <div className="header">
            <Logo />
            <input
              className="movie-details--close-btn"
              type="button"
              value="X"
              onClick={toggleMovieDetails.hide}
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
