import React from "react";
import { connect } from "react-redux";
import { findMoviesAsync } from "../../../actions/index";
import {
  createMovieSearchParams,
  getCurrentLocationState,
  withParams
} from "../../../utils";

class BasicFindMovie extends React.Component {
  public props: any;
  state: any = {};

  constructor(props: any) {
    super(props);
  }

  onChange = (event: any) => {
    this.setState({ ...this.state, searchQuery: event.target.value });
  };

  findMovieSubmit = (event: any) => {
    event.preventDefault();
    console.log("Find movie ... by", this.state.searchQuery);
    const path = {
      pathname: `/search/${this.state.searchQuery}`,
      search: `?${createMovieSearchParams({})}`
    };
    this.props.navigate(path, { replace: true });
    this.props.onFindMovie();
    return false;
  };

  componentDidMount() {
    this.setState(
      getCurrentLocationState(this.props.location, this.props.params)
    );
  }

  render() {
    return (
      <div className="header--find-movie">
        <nav className="header--find-movie-nav">
          <form
            className="find-movie-form"
            name="find-movie-form"
            action="#"
            method="POST"
            onSubmit={this.findMovieSubmit}
          >
            <ul className="find-movie-form">
              <li className="">
                <input
                  className="header--movie-name"
                  name="name"
                  type="text"
                  placeholder="What do you want to watch ?"
                  defaultValue={this.state.searchQuery}
                  required
                  id="find-movie-by-query"
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
    onFindMovie: () => dispatch(findMoviesAsync())
  };
};

export const FindMovie = connect(
  ({ query }: any) => ({
    query
  }),
  mapDispatchToProps
)(withParams(BasicFindMovie));
