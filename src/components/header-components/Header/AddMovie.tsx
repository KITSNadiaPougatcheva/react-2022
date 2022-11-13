import { Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { addMovieAsync } from "../../../actions";
import { ModalWithButton } from "../../universal-components";
import { AddMovieBtn } from "./AddMovieBtn";

class AddMovieBasic extends React.PureComponent {
  props: any;

  state = {
    isOpen: false
  };

  reset = () => {
    this.setState({ ...this.state, isOpen: false });
  };

  hideModal = (event: any) => {
    event.preventDefault();
    this.setState({ isOpen: false });
  };

  submit = (values: any, actions: any) => {
    const title = values.title;
    const overview = values.overview;
    this.setState({ ...this.state, isOpen: false });
    const { onAddMovie } = this.props;
    onAddMovie({ ...this.props.details, title, overview });
    actions.resetForm();
  };

  validate = (values: any) => {
    const errors: any = {};
    if (!values.title) {
      errors.title = "Title cannot be empty";
    }
    if (!values.overview) {
      errors.overview = "Overview cannot be empty";
    }
    return errors;
  };

  openModal = () => this.setState({ ...this.state, isOpen: true });

  render() {
    return (
      <Formik
        initialValues={{
          title: "",
          overview: "",
          openModal: this.openModal,
          hideModal: this.hideModal
        }}
        onSubmit={this.submit}
        validate={this.validate}
        onReset={this.reset}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
          handleReset
        }) => (
          <>
            <AddMovieBtn openModal={values.openModal} />
            <ModalWithButton
              isOpen={this.state.isOpen}
              hideModal={handleReset}
              submit={handleSubmit}
              title="Add Movie"
            >
              <input
                type="text"
                required
                name="title"
                placeholder="name"
                id="addMovieName"
                defaultValue={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && <div>ERROR : {errors.title}</div>}
              <input
                type="text"
                required
                name="overview"
                placeholder="description"
                id="addMovieDescr"
                defaultValue={values.overview}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.overview && <div>ERROR : {errors.overview}</div>}
            </ModalWithButton>
          </>
        )}
      </Formik>
    );
  }
}

const mapDispatchToProps = {
  onAddMovie: addMovieAsync
};

export const AddMovie = connect(null, mapDispatchToProps)(AddMovieBasic);
