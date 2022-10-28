import React from "react";
import { MenuUtils } from "../../../utils/MenuUtils";
import { MenuItem } from "../MenuItem";

interface NavigationState {
  menu: any[]
}

export class Navigation extends React.Component {
	
  readonly state: NavigationState;

  constructor(readonly props: any) {
    super(props);
    this.state = { menu: MenuUtils.getMenuItems() };
  }

  render() {
    const { menu } = this.state;

    return (
      <section className="navigation">
        <div className="navigation">
          <nav className="header--navigation">
            <ul className="navigation">
              {menu.map(item => <MenuItem id={item.id}  href={item.href} text={item.text} key={item.id}/>)}
            </ul>
          </nav>
          {this.props.children}
        </div>
      </section>
    );
  }
}
