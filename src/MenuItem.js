import React from "react";

const MenuItem = props => React.createElement("li", null, React.createElement("a", props, props.text));

MenuItem.defaultProps = {
  text: "Home",
  href: "#"
};

export default MenuItem;
