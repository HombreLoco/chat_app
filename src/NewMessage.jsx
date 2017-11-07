import React, {Component} from 'react';

class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.sendNewMessage = this.sendNewMessage.bind(this);
  }

  sendNewMessage = () => {
    console.log("in sendNewMessage");
    let message = {
      sender: this.props.user.id,
      receiver: this.props.friend.id,
      content: this.state.value
    }
    this.props.sendMessage("", message);
    this.setState({value: ""});
  }

  onKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.sendNewMessage();
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.sendNewMessage();
  }

  componentDidMount() {
    console.log("componentDidMount <NewMessage />");

  }

  render() {
    console.log("Rendering <NewMessage />");

    return (
      <div className="conversationNewMessage">
        <form className="floatRight" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.onKeyPress}
          />
          <input
            type="submit"
            value="Send"
          />
        </form>
        <div className="clearFloat"></div>
      </div>
    );
  }
}

export default NewMessage;