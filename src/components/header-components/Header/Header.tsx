import React from "react";
import { connect } from "react-redux";
import { State } from "../../../state/State";
import { Logo } from "../Logo/Logo";
import { AddMovie } from "./AddMovie";
import { FindMovie } from "./FindMovie";

function BasicHeader(props: State) {
  return (
    <>
      {!props.showMovieDetails && (
        <header>
          <div className="header">
            <Logo />
            <AddMovie />
          </div>
          <FindMovie />
          <div className="header-bottom"></div>
        </header>
      )}
    </>
  );
}

const mapStateToProps = ({ showMovieDetails }: State) => ({ showMovieDetails });

export const Header = connect(mapStateToProps)(BasicHeader);
