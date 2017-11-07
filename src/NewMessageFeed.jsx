import React, {Component} from 'react';

class NewMessageFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessageFeed: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount <NewMessageFeed />");

  }

  render() {
    console.log("Rendering <NewMessageFeed />");

    return (
      <div>
        Sender: {this.props.newestMessage.sender}
        Receiver: {this.props.newestMessage.receiver}
        Message: {this.props.newestMessage.content}
      </div>
    );
  }
}

export default NewMessageFeed;