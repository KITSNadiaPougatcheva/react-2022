import React from "react";
import { connect } from "react-redux";
import { deleteMovieAsync } from "../../../actions";
import { ModalWithButton } from "../../universal-components";
import { DeleteMovieBtn } from "./DeleteMovieBtn";

interface Props {
  details: any;
  onDeleteMovie?: any;
}

class DeleteMovieBasic extends React.PureComponent<Props> {
  state = {
    isOpen: false
  };

  hideModal = (event: any) => {
    event.preventDefault();
    this.setState({ isOpen: false });
  };

  submit = (event: any) => {
    event.preventDefault();
    console.log(`Deleting movie #${this.props.details.id}`);

    this.setState({ isOpen: false });

    const { onDeleteMovie } = this.props;
    onDeleteMovie(this.props.details.id);
  };

  openModal = () => this.setState({ isOpen: true });

  render() {
    return (
      <>
        <DeleteMovieBtn openModal={this.openModal} />
        <ModalWithButton
          isOpen={this.state.isOpen}
          hideModal={this.hideModal}
          submit={this.submit}
          title="Delete Movie"
        >
          <p>Delete movie &quot;{this.props.details.title}&quot; ?</p>
        </ModalWithButton>
      </>
    );
  }
}

const mapDispatchToProps = {
  onDeleteMovie: deleteMovieAsync
};

export const DeleteMovie = connect(null, mapDispatchToProps)(DeleteMovieBasic);
