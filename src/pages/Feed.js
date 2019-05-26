import React, { Component } from 'react'
import { withAuth } from './../lib/AuthProvider';
import { Link } from 'react-router-dom';


class Feed extends Component {
  render() {
    const {user, logout, isLoggedin} = this.props;
    return (
      <div>

        <h1>I am feed</h1>

        <button onClick={logout}>log out</button>
      </div>
    )
  }
}

export default withAuth(Feed)
