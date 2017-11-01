import React, {Component} from 'react';
import Login from './Login.jsx';
import UserDetails from './UserDetails.jsx';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = io("http://localhost:3030");
    this.state = {
      user: {
        id: "",
        username: "",
        friends: []
      },
      allUsers: [
        {
          id: "1",
          username: "a",
          friends: ["2", "3", "4"]
        },
        {
          id: "2",
          username: "b",
          friends: ["1", "4"]
        },
        {
          id: "3",
          username: "c",
          friends: ["1"]
        },
        {
          id: "4",
          username: "d",
          friends: ["1", "2"]
        }
      ]
    };
  }

  logUserIn = (user) => {
    console.log("Currently in logUserIn");
    // this.state.user.id = user.id;
    // this.state.user.username = user.username;
    // this.state.user.friends = user.friends;
    this.setState({user: user});
    console.log("user: ", this.state.user);
  }

  findUserInDB = (username) => {
    console.log("Currently in findUserInDB");
    for (var user of this.state.allUsers) {
      if (user.username === username) {
        this.logUserIn(user);
      }
    }
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

  handleUserLogin = (currentUserLogin) => {
    console.log("Currently in handleUserLogin function");
    this.findUserInDB(currentUserLogin);

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
        <Login handleUserLogin={this.handleUserLogin} />
        <UserDetails user={this.state.user}/>
      </div>
    );
  }


}

export default App;