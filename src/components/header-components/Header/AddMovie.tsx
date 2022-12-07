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
    const { title, overview, vote_average, tagline } = values;
    this.setState({ ...this.state, isOpen: false });
    const { onAddMovie } = this.props;
    onAddMovie({
      ...this.props.details,
      title,
      overview,
      vote_average: Number(vote_average),
      tagline
    });
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
    if (isNaN(values.vote_average)) {
      errors.vote_average = "Rating should be a number";
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
          tagline: "",
          vote_average: 0,
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
              <input
                type="text"
                required
                name="vote_average"
                placeholder="rating"
                id="addMovieRating"
                defaultValue={values.vote_average}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.overview && <div>ERROR : {errors.overview}</div>}
              <input
                type="text"
                required
                name="tagline"
                placeholder="tagline"
                id="addMovieTagline"
                defaultValue={values.tagline}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.tagline && <div>ERROR : {errors.tagline}</div>}
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

export const AddMovie = connect<any>(null, mapDispatchToProps)(AddMovieBasic);
