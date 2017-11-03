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
        YES!!!
      </div>
    );
  }
}

export default NewMessageFeed;