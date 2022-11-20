import React from "react";
import { connect } from "react-redux";
import { createSearchParams } from "react-router-dom";
import { findMoviesAsync } from "../../../actions/index";
import { withParams } from "../../../utils";

class BasicFindMovie extends React.Component {
  public props: any;
  state: any = {};

  constructor(props: any) {
    super(props);
  }

  onChange = (event: any) => {
    this.setState({ query: event.target.value });
  };

  findMovieSubmit = (event: any) => {
    event.preventDefault();
    const queryInput = this.state.query || "";
    console.log("Find movie ... by", queryInput);
    const path = {
      pathname: "search",
      search: `?${createSearchParams({
        searchQuery: queryInput
      })}`
    };
    const navigate = this.props.navigate;
    navigate(path);
    const { onFindMovie } = this.props;
    onFindMovie(queryInput);
  };

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search);
    const query = queryParams.get("searchQuery") || "";
    this.setState({ query });
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
          >
            <ul className="find-movie-form">
              <li className="">
                <input
                  className="header--movie-name"
                  name="name"
                  type="text"
                  placeholder="What do you want to watch ?"
                  defaultValue={this.state.query}
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
