import React from "react";
import { ModalWithButton } from "../../universal-components";
import { DeleteMovieBtn } from "./DeleteMovieBtn";

export class DeleteMovie extends React.PureComponent {
  state = {
    isOpen: false
  }

  hideModal = (event: any) => {
    event.preventDefault();
    this.setState({isOpen: false});
  }

  openModal = () => this.setState({ isOpen: true });

  render() {
    return (
      <>
        <DeleteMovieBtn openModal={this.openModal}/>
        <ModalWithButton isOpen={this.state.isOpen} hideModal={this.hideModal} title="Delete Movie"/>
      </>
    );
  }
}
