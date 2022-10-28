import React from "react";

interface SortByProps {
    onSelect: any
}

export class SortBy extends React.PureComponent {
  constructor(public readonly props: SortByProps) { super(props); }

  render() {
    return (
      <ul className="header--sorting">
        <li>Sort by </li>
        <li>
          <select className="header--sorting-selector" onChange={this.props.onSelect}>
            <option>Alphabet</option>
            <option>Rating</option>
          </select>
        </li>
      </ul>
    );
  }
}
