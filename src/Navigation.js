import React from "react";
import Header from "./Header";
import MenuItem from "./MenuItem";

import menu from "./menu";

class Navigation extends React.Component {
  render() {
    return (
      <Header>
        {menu.map(item => <MenuItem href={item.href} text={item.title} key={item.id}/>)}
      </Header>
    );
  }
}

export default Navigation;
