import React, { Component } from 'react';
import buddies from './../lib/buddie-service';
import {withAuth} from './../lib/AuthProvider';
import {Link} from "react-router-dom";
import Navbar from "./../components/Navbar";




class Buddies extends Component {
  state = {
    buddies: [],
  }

  componentDidMount(){
    this.getAllBuddies();
  }

  getAllBuddies =() => {
    buddies.getBuddies()
      .then((buddies)=> this.setState({buddies}))
  }

  handleDelete = (id) => {
    buddies.deleteBuddie(id)
      .then(() => this.getAllBuddies() )
  }

  render() {
    const {buddies} = this.state;
    return(
      <div>
        <Navbar/>
          <h4>buddies</h4>

          {buddies.map((buddieObj, index)=>{
          return (
            <div className="buddies">
              <div className="buddies-half">
                {/* <img className="buddies-avatar" src={buddieObj.image}/> */}
                <div className="buddies-avatar" style={{ backgroundImage: `url(${buddieObj.image})`}}>
                  <h4 className="buddies-name" key={buddieObj._id}>{buddieObj.username}</h4>

                </div>

              </div>
              <div className="buddies-half buddies-btn-container">
                <button className="buddies-btn" onClick={ () => this.handleDelete(buddieObj._id) }>
                  <img className="buddies-img" src="/images/delete-button.png" />
                </button>

                <button className="buddies-btn">
                  <img className="buddies-img" src="/images/chat.png" />
                </button>
              </div>
          </div>)
          })}
      </div>
    )
  }
}

export default withAuth(Buddies);
