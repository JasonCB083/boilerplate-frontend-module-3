import React, { Component } from "react";
import { render } from "react-dom";
import buddie from "../lib/buddie-service";
import Swipeable from "react-swipy";
import { withAuth } from "../lib/AuthProvider";
import Card from "./../components/Card";
import Button from "./../components/Button";
import profile from '../lib/profile-service';
import Navbar from "./../components/Navbar";

const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = { position: "relative", width: "250px", height: "250px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

class Feed2 extends Component {

  state = {
    profiles: [],
    count: 0,
  };

  componentDidMount(){
    const myId = this.props.user._id
    profile.getOne(myId)
      .then((myUser)=>{
        profile.getAll()
        .then((profiles)=>{
          myUser.buddies.forEach((buddy)=>{
            profiles.forEach((profile, index)=>{
              if(profile._id === buddy || profile._id === myUser._id){
                profiles.splice(index, 1);
              }
            })
          })
          this.setState({profiles})
        })
      })

  }

  likeUser = () => {
    console.log("likeUser called");

    const { profiles, count} = this.state;

    if(count < profiles.length){
      const buddieId = profiles[count]._id;
      const { _id } = this.props.user;

      buddie.addBuddie(_id, buddieId)
       .then((data) => data);
       this.setState({count: this.state.count + 1})
    }

  }
  handleSwipe = (direction) => {
    // direction === "right" ? this.likeUser() : console.log("reject")
  }


  remove = () =>
  this.setState(({ profiles }) => ({ profiles: profiles.slice(1, profiles.length) }));

  handleReject = () => {
    console.log("REJECT")
    console.log("this.state.profiles",this.state.profiles)
  }

  handleAccept = () => {
    this.likeUser();
  }


  render() {
    const { profiles } = this.state;
    console.log(this.state)
    return (

      <div style={appStyles} >
        <Navbar/>
        <div style={wrapperStyles}>
          {profiles.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>

                    <Button buttonClass="btn-red" onClick={() => {
                      this.handleReject();
                      left()
                      }}>Reject</Button>

                    <Button buttonClass="btn" onClick={() => {
                      this.handleAccept();
                      right()
                      }}>buddie time</Button>

                  </div>
                )}
                onSwipe={(direction)=>{this.handleSwipe(direction)}}
                onAfterSwipe={this.remove}
              >
                <Card>
                  <h3>{profiles[0].username}</h3>
                  <img className="user-image" src={profiles[0].image} />


                </Card>
              </Swipeable>
              {profiles.length > 1 && (
                <Card zIndex={-1}>
                  <h3>{profiles[1].username}</h3>
                  <img className="user-image" src={profiles[1].image} />
                </Card>
              )}
            </div>
          )}
          {profiles.length < 1 && <p>No more profiles</p> }

        </div>
      </div>
    );
  }
}

export default withAuth(Feed2);
