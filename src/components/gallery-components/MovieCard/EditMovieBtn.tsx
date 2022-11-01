import React from "react";

export class EditMovieBtn extends React.PureComponent {
  constructor(public readonly props: any) {
    super(props);
  }

  render() {
    return (
      <p className="movie--edit" onClick={this.props.openModal}>
        Edit
      </p>
    );
  }
}
