import React from "react";

import ErrorBoundaries from "./ErrorBoundaries";
import MovieList from "./MovieList";

class MovieGallery extends React.Component {
  render() {
    return (
      <section className="portfolio" id="portfolio">
        <div className="portfolio">
          <div className="portfolio--images">
            <ErrorBoundaries>
              <MovieList/>
            </ErrorBoundaries>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieGallery;
