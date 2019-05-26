import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="login">
        <span className="circle"></span>
        <h1 className="login-title">PlayPix</h1>

        <img className="login-image" src="/images/Ellipse.png" alt=""/>
        <form className="login-form" onSubmit={this.handleFormSubmit}>
          <input className="login-input" placeholder="User please"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input className="login-input" placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input className="btn" type="submit" value="Login" />
        </form>

        <p>
            Create an amazing account?
            <Link className="signup-link" to={"/signup"}> Signup</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Login);
