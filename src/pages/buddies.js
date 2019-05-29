import React, { Component } from 'react';
import buddies from './../lib/buddie-service';
import {withAuth} from './../lib/AuthProvider';
import {Link} from "react-router-dom";



class Buddies extends Component {
  state = {
    buddies: [],
  }

  componentDidMount(){
    buddies.getBuddies()
      .then((buddies)=>{
         this.setState({
           buddies})
         })

  }

  render() {
    const {buddies} = this.state;
    return(
      <div>
        <h1>buddies</h1>
        <Link to='/feed'><button >feed</button></Link>
        <Link to='/profile'><button >My Profile</button></Link>
        {buddies.map((buddieObj, index)=>{
        return  <h4 key={buddieObj._id}>{buddieObj.username}</h4>
        })}
      </div>
    )
  }
}

export default withAuth(Buddies);
