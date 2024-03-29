import React from "react";
import PropTypes from "prop-types";

import ActionButton from "../../components/button/action-button";

import "./modal.scss";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: true };
  }

  agreedAnswer = () => {
    alert("Sure");
  };

  refusedAnswer = () => {
    alert("As you want");
  };

  render() {
    const { text, header, action } = this.props;
    const { isOpened } = this.state;
    return (
      <>
        <section className="modal" onClick={action}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-header-text">{header}</h2>
              <ActionButton className="close" text="X" onClick={action} />
            </div>
            <div>
              <div className="modal-text">{text}</div>
              <div className="button-container">
                <ActionButton
                  text="Yes"
                  className="dialog-btn"
                  action={this.agreedAnswer}
                />
                <ActionButton
                  text="No"
                  className="dialog-btn"
                  action={this.refusedAnswer}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

Modal.propTypes = {
  text: PropTypes.string
};

export default Modal;
