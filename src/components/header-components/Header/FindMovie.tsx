import React from "react";
import { connect } from "react-redux";
import { findMoviesAsync } from "../../../actions/index";

class BasicFindMovie extends React.Component {
  private queryRef: any;
  public props: any;

  constructor(props: any) {
    super(props);
    this.queryRef = React.createRef();
  }

  onChange = (event: any) => {
    console.log("Test", event.target.value);
  };

  findMovieSubmit = (e: any) => {
    e.preventDefault();
    const queryInput = this.queryRef.current;
    console.log("Find movie ... by", queryInput.value);
    const { onFindMovie } = this.props;
    onFindMovie(queryInput.value);
  };

  render() {
    return (
      <div className="header--find-movie">
        <nav className="header--find-movie-nav">
          <form
            className="find-movie-form"
            name="find-movie-form"
            action="#"
            method="POST"
          >
            <ul className="find-movie-form">
              <li className="">
                <input
                  className="header--movie-name"
                  name="name"
                  type="text"
                  placeholder="What do you want to watch ?"
                  defaultValue=""
                  required
                  id="find-movie-by-query"
                  ref={this.queryRef}
                  onChange={this.onChange}
                />
              </li>
              <li className="">
                <input
                  className="header--find-movie-btn"
                  name="find"
                  type="button"
                  value="Find movie"
                  onClick={this.findMovieSubmit}
                />
              </li>
            </ul>
          </form>
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFindMovie: (query: string) =>
      dispatch(findMoviesAsync({ payload: { query } }))
  };
};

export const FindMovie = connect(
  ({ query }: any) => ({
    query
  }),
  mapDispatchToProps
)(BasicFindMovie);
