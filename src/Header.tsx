import React from "react";
import Logo from "./Logo";

interface HeaderProps {
  children: any[]
}

class Header extends React.Component {
  constructor(public readonly props: HeaderProps) { super(props) }
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

export default Header;
