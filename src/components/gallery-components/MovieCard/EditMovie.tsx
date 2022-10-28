import React from "react";
import { ModalWithButton } from "../../universal-components";
import { EditMovieBtn } from "./EditMovieBtn";

export class EditMovie extends React.PureComponent {
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
        <EditMovieBtn openModal={this.openModal}/>
        <ModalWithButton isOpen={this.state.isOpen} hideModal={this.hideModal} title="Edit Movie">
          <input type="text" required name="name" placeholder="name"/>
          <input type="text" required name="description" placeholder="description"/>
        </ModalWithButton>
      </>
    );
  }
}
