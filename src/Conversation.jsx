import React, {Component} from 'react';

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("componentDidMount <Conversation />");

  }

  render() {
    console.log("Rendering <Conversation />");

    let outputMessages;
    const messages = this.props.getConversationMessages(this.props.user.id, this.props.friend.id);
    console.log("messages: ", messages)
    if (messages.length > 0) {
      outputMessages = messages.map( message => {
        console.log("message:", message);
        if (message.sender === this.props.user.id) {
          return (<div key={message.id}><div className="floatRight">{message.content}</div><div className="clearFloat"></div></div>);
        } else {
          return (<div key={message.id}><div className="floatLeft">{message.content}</div><div className="clearFloat"></div></div>);
        }
        

      });
    }

    return (
      <div className="conversation">
        <div className="conversationHeader">
          <div className="floatLeft">{this.props.friend.username}</div>
          <div className="floatRight">{this.props.user.username}</div>
          <div className="clearFloat"></div>
        </div>
        {outputMessages}
      </div>
    );
  }
}

export default Conversation;