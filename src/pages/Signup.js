import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email:"",
    city:"",
    // image:""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, email, city} = this.state;
    this.props.signup({ username, password, email, city});
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, email, city} = this.state;
    return (
      <div className="signup">
        <h1 className="signup-title">playpix</h1>

        <form className="signup-form" onSubmit={this.handleFormSubmit}>
          <input
            placeholder="Username"
            className="signup-input"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            className="signup-input"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            placeholder="Email"
            className="signup-input"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="City"
            className="signup-input"
            type="text"
            name="city"
            value={city}
            onChange={this.handleChange}
          />

          <input className="btn" type="submit" value="Signup" />
        </form>
        <p>
          Have a PlayPix account?
          <Link className="signup-link" to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
