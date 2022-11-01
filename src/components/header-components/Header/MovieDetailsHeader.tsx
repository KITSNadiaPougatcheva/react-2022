import React, { useContext } from "react";
// import { AddMovie } from "./AddMovie";
// import { FindMovie } from "./FindMovie";
import { AppHideMovieDetailsContext, AppMovieDetailsContext } from "../../context";
import { Logo } from "../Logo";

export function MovieDetailsHeader(_props: any) {
  
    const showMovieDetails = useContext(AppMovieDetailsContext)
    const toggleMovieDetails = useContext(AppHideMovieDetailsContext)
    return (
      <>
      {showMovieDetails && (<header>
        <div className="header">
          <Logo />
          <input
                  className="movie-details--close-btn"
                  type="button"
                  value="X"
                  onClick={toggleMovieDetails}
                />
        </div>

          <div className="movie-details-header-content">
            <img src="./static/m1.png" alt="test moview" />
            <div className="movie--details">
              <h2 className="movie--title">Movie Title</h2>
              <div className="movie--brif-description">
              {showMovieDetails}
              </div>
              <div className="movie--year">1994</div>
              <div className="movie--range">Rating: 5</div>
              <div className="movie--long-description">
              Long description Long description Long description Long description Long description
              </div>
            </div>
          </div>

        <div className="header-bottom"></div>
        </header>)
        }
        </>
    );
}
