import React, { Component } from "react";
import Message from "./Message";

export default class MessageList extends Component {
  state = {};

  render() {
    const { messages, editOwnMessage, deleteMessage } = this.props;
    return (
      <>
        <h2>This is MessageList component</h2>
        <ul>
          {messages.map(msg => {
            return (
              <li key={msg.id}>
                <Message
                  msg={msg}
                  editOwnMessage={editOwnMessage}
                  deleteMessage={deleteMessage}
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
