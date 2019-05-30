import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";



class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="navbar">

            <Link className="navbar-link" to={'/EditProfile'}> <img src="/images/user.png" /> </Link>
            <Link className="navbar-link" to={'/preference'}> <img src="/images/selective.png" /> </Link>
            <Link className="navbar-link" to={'/feed'}> <img src="/images/find-my-friend.png" /> </Link>
            <Link className="navbar-link" to={'/buddies'}> <img src="/images/teammate.png" /> </Link>

            <button className="navbar-link" onClick={logout}><img src="/images/logout.png" /></button>
      </div>
    );
  }
}

export default withAuth(Navbar);
