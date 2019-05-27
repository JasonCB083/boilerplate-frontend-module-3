import React, { Component } from 'react'
import { withAuth } from './../lib/AuthProvider';
import { Link } from 'react-router-dom';

class Preference extends Component {
  render() {
    const {user, logout, isLoggedin} = this.props;
    return (
      <div>

        <h1>I am Preferences</h1>

        <Link to={'/feed'}>
        <button>feed</button>
        </Link>

        <button onClick={logout}>log out</button>
      </div>
    )
  }
}


export default withAuth(Preference)