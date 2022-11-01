import React from "react";
import { Logo } from "../Logo/Logo";

interface HeaderProps {
  children: any[]
}

export class Header extends React.Component {
  constructor(public readonly props: HeaderProps) { super(props); }

  render() {
    return (
      <header>
        <div className="header">
          <Logo />
          <nav className="header--navigation">
            <ul className="navigation">{this.props.children}</ul>
          </nav>
        </div>
      </header>
    );
  }
}
