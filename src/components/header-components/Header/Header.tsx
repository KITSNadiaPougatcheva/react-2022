import React from "react";
import { connect } from "react-redux";
import { State } from "../../../state/State";
import { withParams } from "../../../utils";
import { Logo } from "../Logo/Logo";
import { AddMovie } from "./AddMovie";
import { FindMovie } from "./FindMovie";

function BasicHeader(props: any) {
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

export const Header = connect(mapStateToProps)(withParams(BasicHeader));
