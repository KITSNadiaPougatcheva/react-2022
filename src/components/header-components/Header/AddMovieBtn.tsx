import React from "react";

export function AddMovieBtn(props: any) {
  return (
    <nav className="header--add-movie">
      <ul className="navigation">
        <li className="">
          <input
            className="header--add-movie add-movie-btn"
            type="button"
            value="Add movie"
            onClick={props.openModal}
          />
        </li>
      </ul>
    </nav>
  );
}
