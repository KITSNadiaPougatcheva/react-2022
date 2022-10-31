import React from "react";
import { Logo } from "../Logo/Logo";
import { AddMovie } from "./AddMovie";
import { FindMovie } from "./FindMovie";

interface HeaderProps {
  children?: any[];
  findMovie?: any;
}

export class Header extends React.Component {
  constructor(public readonly props: HeaderProps) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="header">
          <Logo />
          <AddMovie />
        </div>
        <FindMovie findMovie={this.props.findMovie} />
        <div className="header-bottom"></div>
      </header>
    );
  }
}
