import React from "react";
import PropTypes from "prop-types";

import Modal from "./containers/modal/modal";
import ActionButton from "./components/button/action-button";

import "./app.scss";

class App extends React.Component {
  state = {
    firstFired: false,
    secondFired: false
  };
  openFirstModal = () => {
    this.setState(prevState => ({
      firstFired: !prevState.firstFired,
      secondFired: false
    }));
  };

  openSecondModal = e => {
    this.setState(prevState => ({
      secondFired: !prevState.secondFired,
      firstFired: false
    }));
  };

  render() {
    const { firstFired, secondFired } = this.state;
    return (
      <>
        <div className="buttons-container">
          <ActionButton
            className="red opener-btn"
            action={this.openFirstModal}
            text="Open first modal"
          />
          <ActionButton
            className="blue opener-btn"
            action={this.openSecondModal}
            text="Open second modal"
          />
        </div>
        {firstFired ? (
          <Modal
            text="Sounds pathetic, but some people will ke that"
            className="first-modal"
            action={this.openFirstModal}
            header="Do you want to live forever?"
          />
        ) : null}
        {secondFired ? (
          <Modal
            text="... and start live forver"
            className="second-modal"
            action={this.openSecondModal}
            header="Quit existential crisis?"
          />
        ) : null}
      </>
    );
  }
}

App.propTypes = {
  text: PropTypes.string
};

export default App;
