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
        friends: [],
        rooms: [
          {
            friendId: "",
            socketId: ""
          }
        ]
      },
      allUsers: [
        {
          id: "1",
          username: "Jacques",
          friends: ["2", "3", "4"]
        },
        {
          id: "2",
          username: "Rebecca",
          friends: ["1", "4"]
        },
        {
          id: "3",
          username: "Rochelle",
          friends: ["1"]
        },
        {
          id: "4",
          username: "Shirley",
          friends: ["1", "2"]
        }
      ],
      messageList: [
        {
          id: 1,
          sender: "1",
          receiver: "2",
          content: "Hello 2",
          time: "just now",
          roomId: "1"
        },
        {
          id: 2,
          sender: "2",
          receiver: "1",
          content: "Hey there 1",
          time: "just now",
          roomId: "1"
        },
        {
          id: 3,
          sender: "1",
          receiver: "3",
          content: "Yeah dawg",
          time: "just now",
          roomId: "2"
        },
        {
          id: 4,
          sender: "1",
          receiver: "3",
          content: "Just livin'",
          time: "just now",
          roomId: "2"
        },
        {
          id: 5,
          sender: "3",
          receiver: "1",
          content: "chicken wings",
          time: "just now",
          roomId: "2"
        },
        {
          id: 6,
          sender: "4",
          receiver: "1",
          content: "Anybody out there?",
          time: "just now",
          roomId: "3"
        },
        {
          id: 7,
          sender: "2",
          receiver: "4",
          content: "Sneaky Dee's Pub",
          time: "just now",
          roomId: "4"
        },
        {
          id: 8,
          sender: "1",
          receiver: "2",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 9,
          sender: "2",
          receiver: "1",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 10,
          sender: "1",
          receiver: "2",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 11,
          sender: "2",
          receiver: "1",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 12,
          sender: "1",
          receiver: "2",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 13,
          sender: "2",
          receiver: "1",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 14,
          sender: "1",
          receiver: "2",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 15,
          sender: "2",
          receiver: "1",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 16,
          sender: "1",
          receiver: "2",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 17,
          sender: "2",
          receiver: "1",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 18,
          sender: "1",
          receiver: "2",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
        },
        {
          id: 19,
          sender: "2",
          receiver: "1",
          content: "TEST STRING",
          time: "just now",
          roomId: "1"
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

  getUserById = (id) => {
    for (var user of this.state.allUsers) {
      if (user.id === id) {
        return user;
      }
    }
  }

  getConversationMessages = (sender, receiver) => {
    let messageList = [];
    this.state.messageList.forEach(function(message) {
      if ((message.sender === sender && message.receiver === receiver) || (message.sender === receiver && message.receiver === sender)) {
        messageList.push(message);
      }
    });
    return messageList;
  }

  sendMessage = (chatSocket, chatMessage) => {
    console.log("Currently in sendMessage function");
    this.socket.emit('textMessage', chatMessage);
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
        <UserDetails user={this.state.user} getUserById={this.getUserById} getConversationMessages={this.getConversationMessages} sendMessage={this.sendMessage}/>
      </div>
    );
  }
}

export default App;