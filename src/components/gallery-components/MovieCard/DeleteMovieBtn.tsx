import React from "react";

export class DeleteMovieBtn extends React.PureComponent {
  constructor(public readonly props: any) { super(props); }

  render() {
    return (
      <p className="movie--delete" onClick={this.props.openModal}>Delete</p>
    );
  }
}
