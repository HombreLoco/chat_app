import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Conversation from './Conversation.jsx';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("componentDidMount <UserDetails />");

  }

  render() {
    console.log("Rendering <UserDetails />");
    console.log("this.props.user: ", this.props.user);
    var friendList;
    var friendListRoutes = [];
    // this.createFriendList(friendList, friendListRoutes);
    if (this.props.user.friends.length > 0) {
      friendList = this.props.user.friends.map( friend => {
        let friendInfo = this.props.getUserById(friend);
        friendListRoutes.push(<Route path={`/conversation/${friendInfo.id}`} key={friendInfo.id} component={() => (<Conversation user={this.props.user} friend={friendInfo} getConversationMessages={this.props.getConversationMessages} sendMessage={this.props.sendMessage} newestMessage={this.props.newestMessage} />)} />)
        return (
          <li key={friendInfo.id}>
            <Link to={`/conversation/${friendInfo.id}`}>{friendInfo.username}</Link>
          </li>
        )
      });
    }
    return (
      <Router>
        <div>
          <div className="userDetails">
            <h2>User ID: {this.props.user.id}</h2>
            <h2>Username: {this.props.user.username}</h2>
            <h2>Friend List: </h2>
            <ul>
              {friendList}
            </ul>
          </div>
          {friendListRoutes}
        </div>
      </Router>
    );
  }
}

export default UserDetails;