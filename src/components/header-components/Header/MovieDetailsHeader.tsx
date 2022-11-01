import React from "react";
// import { AddMovie } from "./AddMovie";
// import { FindMovie } from "./FindMovie";
import { AppContext } from "../../context";
import { Logo } from "../Logo";

export class MovieDetailsHeader extends React.Component {
  constructor(public readonly props: any) {
    super(props);
  }
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>
  render() {
    const showMovieDetails = this.context.showMovieDetails
    console.log("MovieDetailsHeader", this.context)
    return (
      <>
      {showMovieDetails &&  (<header>
        <div className="header">
          <Logo />
          <input
                  className="movie-details--close-btn"
                  type="button"
                  value="X"
                  onClick={this.context.toggleTheme}
                />
        </div>

          <div className="movie-details-header-content">
            <img src="./static/m1.png" alt="test moview" />
            <div className="movie--details">
              <h2 className="movie--title">Movie Title</h2>
              <div className="movie--brif-description">
              {this.context.theme}
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
}
