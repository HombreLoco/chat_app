import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  loginByName = (e) => {
    e.preventDefault();
    console.log("in loginByName");
    this.props.handleUserLogin(this.state.value);
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  componentDidMount() {
    console.log("componentDidMount <Login />");

  }

  render() {
    console.log("Rendering <Login />");
    return (
      <div>
          <label>Login with username:</label>
          <input 
            id="m" 
            autoComplete="off" 
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button id="send" onClick={this.loginByName}>Login</button>
        </div>
    );
  }
}

export default Login;