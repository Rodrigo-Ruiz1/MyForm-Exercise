import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //message is initially set at blank, and whether it is showing or not is set as false
      message: "",
      showMessage: false
    };
  }

  //event method that sets message state to new text
  _handleChange = (event) => {
    this.setState({
      message: event.target.value
    });
  };

  //event method that toggles when to show message
  _handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showMessage: true
    });
  };

  render() {
    const { message, showMessage } = this.state;
    return (
      <>
        <p>{!!showMessage ? message : "Enter a message in the form below."}</p>
        {/* Prevent submit default action, and add submit event method to the FORM */}
        <form onSubmit={this._handleSubmit}>
          <input
            type="text"
            placeholder="Type a message here"
            value={message}
            onChange={this._handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default MyForm;
