import React, { Component } from 'react'
import {  Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import profile from '../lib/profile-service';




class Feed extends Component {
  state = {
    profiles: [],
  }

  componentDidMount(){

    profile.getAll()
      .then((profiles)=>{
        this.setState({profiles})})
  }

  render() {
    const {profiles} = this.state;
    return (
      <div>
      <h3>Welcome to your feed!</h3>
      {profiles.map((profile, index)=>{
        return <Link key={profile._id} to={`userprofile/${profile._id}`}>

                  <h3>{profile.username}</h3>
                  <img src={profile.image} alt="pic"/>
                  <p>Sports: {profile.sports} <br />
                    City:{profile.city}</p>
                </Link>
      })}

      </div>
    )
  }
}
export default Feed;
