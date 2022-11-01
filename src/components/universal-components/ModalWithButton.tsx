import React from "react";

export class ModalWithButton extends React.PureComponent {
  constructor(readonly props: any) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.isOpen && (
          <div className="modal-wrapper">
            <div className="form-content modal-form">
              <h2 className="active">{this.props.title}</h2>
              <form className="movie-form" action="#" method="POST">
                {this.props.children}
                <input
                  type="button"
                  className="fadeIn fourth cancel"
                  value="cancel"
                  onClick={this.props.hideModal}
                />
                <input
                  type="submit"
                  className="fadeIn fourth submit"
                  value="submit"
                  onClick={this.props.hideModal}
                />
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}
