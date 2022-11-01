import React from "react";

export class FindMovie extends React.Component {
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
            <ul className="navigation">
              <li className="">
                <input
                  className="header--movie-name"
                  name="name"
                  type="text"
                  placeholder="What do you want to watch ?"
                  required
                />
              </li>
              <li className="">
                <input
                  className="header--find-movie-btn"
                  name="find"
                  type="button"
                  value="Find movie"
                />
              </li>
            </ul>
          </form>
        </nav>
      </div>
    );
  }
}
