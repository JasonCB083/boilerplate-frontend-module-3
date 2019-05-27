import React, { Component } from 'react'
import profile from '../lib/profile-service';
import {withAuth} from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import buddie from './../lib/buddie-service';  /// create new service?

class UserProfile extends Component {
  state = {
    profile: [],
  }

  componentDidMount(){
    console.log('PROPS',this.props)
    const { id } = this.props.match.params;
    profile.getOne(id)
      .then((profile)=> {
      console.log(profile)
      this.setState({profile})
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('BUDDIE ID -> ', this.props.match.params)
    console.log('USER ID -> ', this.props.user._id)
    const { _id: userId } = this.props.user;
    const { id: buddieId } = this.props.match.params;

    buddie.addBuddie(userId, buddieId)
     .then((data) => data);
  }

  render() {
    const {profile} = this.state;
    console.log('USER ID', profile)
    return (
      <div>
        <h1>{profile.username}</h1>
        <p>{profile.sports}</p>
        <p>{profile.city}</p>

      </div>
    )
  }
}

export default withAuth(UserProfile);
