import React from "react";
import Logo from "./Logo";

class Header extends React.Component {
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
