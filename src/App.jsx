import React, {Component} from 'react';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.socket = io("http://localhost:3030");
  }

  sendMessage = (chatSocket, chatMessage) => {
    console.log("Currently in sendMessage function");
    chatSocket.emit('textMessage', chatMessage);
    // set value of current chat message to "" (empty string)
  }

  handleMessage = (chatMessage) => {
    console.log("Currently in handleMessage function");
    this.socket.emit('textMessage', "HELLO ALL CHAT");
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.handleMessage(this.socket);
    // var socket = io.connect();
    // this.socket = this.socket.connect();
    this.socket.on('textMessage', function(chatMessage) {
      console.log("Message Received: " + chatMessage);
    });
  }

  render() {
    console.log("Rendering <App />");
    return (
      <div>
        <ul id="messages"></ul>
        <div>
          <input id="m" autoComplete="off" />
          <button id="send">Send</button>
        </div>
      </div>
    );
  }


}

export default App;