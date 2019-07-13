import React, { Component } from "react";

export default class MessageInput extends Component {
  state = {
    msgText: ""
  };

  onMsgBoxChange = event => {
    const msgText = event.currentTarget.value;

    this.setState({
      msgText
    });
  };

  sendBtnClickHandler = () => {
    const { onNewMsg } = this.props;
    const { msgText } = this.state;

    onNewMsg(msgText);
    this.setState({
      msgText: ""
    });
  };

  editBtnClickHandler = () => {
    const { onEditMsg } = this.props;
    const { msgText } = this.state;

    onEditMsg(msgText);
    this.setState({
      msgText: ""
    });
  };

  render() {
    const { msgText } = this.state;
    const { messageForEdit } = this.props;
    let textForComp;

    if (msgText) {
      textForComp = msgText;
    } else if (messageForEdit) {
      textForComp = messageForEdit.message;
    } else {
      textForComp = "";
    }

    return (
      <>
        <h1>This is MessageInput component</h1>
        <textarea
          cols={70}
          rows={4}
          value={textForComp}
          onChange={this.onMsgBoxChange}
        />
        {messageForEdit ? (
          <button onClick={this.editBtnClickHandler}>Edit</button>
        ) : (
          <button onClick={this.sendBtnClickHandler}>Send</button>
        )}
      </>
    );
  }
}
