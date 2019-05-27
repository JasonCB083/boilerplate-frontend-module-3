import React, { Component } from 'react';
import favorite from './../lib/favorite-service';
import {withAuth} from './../lib/AuthProvider';
import {  Link } from "react-router-dom";


class Buddies extends Component {
  state = {
    buddies: [],
  }

  componentDidMount(){
    console.log('PROPS->',this.props)
    const { _id } = this.props.user;
    console.log('ID->',_id)
    buddies.getBuddies(_id)
      .then(({buddies})=>this.setState({buddies}))
  }

  render() {
    const {buddies} = this.state;
    console.log('BUDDIES BY USER -> ',buddies);
    return(
      <div>
        <h1>buddies</h1>
        <Link to='/dashboard'><button >Home</button></Link>
        <Link to='/profile'><button >My Profile</button></Link>
        {favorites.map((favoriteObj, index)=>{
        return  <h4 key={favoriteObj._id}>{favoriteObj.username}</h4>
        })}
      </div>
    )
  }
}

export default withAuth(Favorites);
