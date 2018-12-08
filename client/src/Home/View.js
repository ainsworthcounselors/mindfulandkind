import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "./HomeForm";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

// const ErrorView = () => {
//   return (
//     <h1>Error.</h1>
//   )
// }

export default class HomeView extends Component {
  state = {
    isOpen: false
  };
  toggleModal = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };
  render() {
    const { isOpen } = this.state;
    // if(error) return <ErrorView />
    return (
      <React.Fragment>
        <section className="flex flex-column flex-grow-1 justify-content-center align-items-center ">
          <button 
            onClick={this.toggleModal}
            className="mk-button"
          >Submit a Mindful {"&"} Kind Note</button>
        </section>
        <Modal
          onRequestClose={this.toggleModal}
          isOpen={isOpen}
          closeTimeoutMS={150}
          shouldCloseOnOverlayClick={true}
        >
          <Form {...this.props} toggleModal={this.toggleModal} />
        </Modal>
      </React.Fragment>
    );
  }
}

HomeView.propTypes = {
  text: PropTypes.string.isRequired
};
