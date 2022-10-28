import React from "react";
import { MenuItemInterface } from "./MenuItemInterface";

export const MenuItem = (props: MenuItemInterface) =>
  React.createElement("li", null, React.createElement("a", props, props.text));

MenuItem.defaultProps = {
  text: "Home",
  href: "#",
  id: "0"
};
