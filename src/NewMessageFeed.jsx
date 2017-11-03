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
        {this.props.newestMessage}
      </div>
    );
  }
}

export default NewMessageFeed;