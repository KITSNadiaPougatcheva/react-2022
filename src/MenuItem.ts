import React from "react";

interface MenuItemProps {
  text: string
}
const MenuItem = (props: MenuItemProps) => React.createElement("li", null, React.createElement("a", props, props.text));

MenuItem.defaultProps = {
  text: "Home",
  href: "#"
};

export default MenuItem;
