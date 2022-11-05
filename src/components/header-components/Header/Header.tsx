import React, { useContext } from "react";
import { AppMovieDetailsContext } from "../../context";
import { Logo } from "../Logo/Logo";
import { AddMovie } from "./AddMovie";
import { FindMovie } from "./FindMovie";

export function Header(props: any) {
  const showMovieDetails = useContext(AppMovieDetailsContext);
  return (
    <>
      {!showMovieDetails.show && (
        <header>
          <div className="header">
            <Logo />
            <AddMovie />
          </div>
          <FindMovie findMovie={props.findMovie} />
          <div className="header-bottom"></div>
        </header>
      )}
    </>
  );
}
