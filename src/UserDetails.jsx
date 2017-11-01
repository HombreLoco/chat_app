import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createFriendList = this.createFriendList.bind(this);
  }

  createFriendList = (friendList, friendListRoutes) => {
    console.log("Currently in createFriendList function");
    if (this.props.user.friends.length > 0) {
      friendList = this.props.user.friends.map( friend => {
        let friendInfo = this.props.getUserById(friend);
        friendListRoutes.push(<Route path={'hi'} key={friendInfo.id} component={() => (<Conversation conversation={conversation} />)} />)
        return (
          <li key={friendInfo.id}>
            <Link to={`hi`}>{friendInfo.username}</Link>
          </li>
        )
      });
    }
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
        friendListRoutes.push(<Route path={'hi'} key={friendInfo.id} component={() => (<Conversation conversation={conversation} />)} />)
        return (
          <li key={friendInfo.id}>
            <Link to={`hi`}>{friendInfo.username}</Link>
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