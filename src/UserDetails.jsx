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

  createFriendList = (friendList) => {
    console.log("Currently in createFriendList function");
    if (this.props.user.friends.length > 0) {
      friendList = this.props.user.friends.map( friend => {
        return <span className=""></span>
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
    this.createFriendList(friendList);
    return (
      <div>
        <div className="userDetails">
          <h2>User ID: {this.props.user.id}</h2>
          <h2>Username: {this.props.user.username}</h2>
          {friendList}
        </div>
      </div>
    );
  }
}

export default UserDetails;