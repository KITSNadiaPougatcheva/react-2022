import React from "react";
import ErrorBoundaries from "../../ErrorBoundaries/ErrorBoundaries";
import { MovieList } from "../MovieList";

export class MovieGallery extends React.Component {
  constructor(public readonly props: any) {
    super(props);
  }

  render() {
    return (
      <section className="portfolio" id="portfolio">
        <div className="portfolio">
          <div className="portfolio--images">
            <ErrorBoundaries>
              <MovieList
                sortBy={this.props.sortBy}
                movieQuery={this.props.movieQuery}
              />
            </ErrorBoundaries>
          </div>
        </div>
      </section>
    );
  }
}
