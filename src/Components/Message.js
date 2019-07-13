import React, { Component } from "react";

export default class Message extends Component {
  state = {};

  render() {
    const { msg, editOwnMessage, deleteMessage } = this.props;
    return (
      <>
        <img src={msg.avatar} width={30} alt="" />
        {msg.message}({msg.created_at})
        {msg.user === "anonym" ? (
          <>
            <button
              onClick={_ => {
                editOwnMessage(msg.id);
              }}
            >
              edit
            </button>
            <button
              onClick={_ => {
                deleteMessage(msg.id);
              }}
            >
              delete
            </button>
          </>
        ) : null}
      </>
    );
  }
}
