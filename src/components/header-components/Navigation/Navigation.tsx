import React from "react";
import { MenuUtils } from "../../../utils/MenuUtils";
import { Header } from "../Header";
import { MenuItem } from "../MenuItem";

export class Navigation extends React.Component {
  render() {
    return (
      <Header>
        {MenuUtils.getMenuItems().map((item) => <MenuItem href={item.href} text={item.text} key={item.id}/>)}
      </Header>
    );
  }
}
