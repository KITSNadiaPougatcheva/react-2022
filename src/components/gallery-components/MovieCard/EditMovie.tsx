import { Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { editMovieAsync } from "../../../actions";
import { ModalWithButton } from "../../universal-components";
import { EditMovieBtn } from "./EditMovieBtn";

interface Props {
  details: any;
  onEditMovie?: any;
}

class EditMovieBasic extends React.PureComponent<Props> {
  state = {
    ...this.props.details,
    isOpen: false
  };

  reset = () => {
    this.setState({ ...this.props.details, isOpen: false });
  };

  openModal = () => this.setState({ ...this.props.details, isOpen: true });

  submit = (values: any) => {
    console.log(`Editing movie #${this.props.details.id}`, values);
    const { title, overview, vote_average, tagline } = values
    this.setState({ title, overview, vote_average, tagline, isOpen: false });
    const { onEditMovie } = this.props;
    onEditMovie({ ...this.props.details, title, overview, vote_average: Number(vote_average), tagline });
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
      errors.vote_average = "Rating should be number";
    }
    return errors;
  };

  hideModal = (event: any) => {
    event.preventDefault();
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Formik
        initialValues={{
          title: this.props.details.title,
          overview: this.props.details.overview,
          vote_average: this.props.details.vote_average,
          tagline: this.props.details.tagline,
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
            <EditMovieBtn openModal={values.openModal} />
            <ModalWithButton
              isOpen={this.state.isOpen}
              hideModal={handleReset}
              submit={handleSubmit}
              title="Edit Movie"
            >
              Title <input
                type="text"
                required
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && <div>ERROR : {errors.title}</div>}
              Description <input
                type="text"
                required
                name="overview"
                value={values.overview}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.overview && <div>ERROR : {errors.overview}</div>}
              Tagline <input
                type="text"
                required
                name="tagline"
                value={values.tagline}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.tagline && <div>ERROR : {errors.tagline}</div>}
              Rating <input
                type="text"
                required
                name="vote_average"
                value={values.vote_average}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.vote_average && <div>ERROR : {errors.vote_average}</div>}
            </ModalWithButton>
          </>
        )}
      </Formik>
    );
  }
}

const mapDispatchToProps = {
  onEditMovie: editMovieAsync
};

export const EditMovie = connect<Props>(
  null,
  mapDispatchToProps
)(EditMovieBasic);
