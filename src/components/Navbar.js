import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="navbar">

            <Link className="navbar-link" to={'/EditProfile'}> <button>Profile</button> </Link>
            <Link className="navbar-link" to={'/feed'}> <button>Feed</button> </Link>
            <Link className="navbar-link" to={'/buddies'}> <button>Buddies</button> </Link>

            <button className="navbar-link" onClick={logout}>log out</button>
      </div>
    );
  }
}

export default withAuth(Navbar);
