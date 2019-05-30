import React, { Component } from 'react'
import { withAuth } from './../lib/AuthProvider';
import sport from "./../lib/sport-service";
import Navbar from "./../components/Navbar";


class Preference extends Component {
  state ={
    inputs: [],
  }
  componentDidMount(){
    this.setState({
      inputs: ['climbing', 'soccer', 'baseball', 'volleyball', 'basketball', 'tennis','football', 'snowboard', 'ping pong', 'surfing', 'paddle', 'squash', 'swimming', 'yoga', 'karate','skiing', 'skateboarding'],
    })
  }

  // componentDidMount(){
  //   const { id } = this.props.match;
  //   console.log('DID MOUNT', this.props.match)
  //   sport.getSport(id)
  //     .then(({sport})=>this.setState({sport}))
  // }
  handleOnClick = (e) => {
    console.log(e.target.value);
    sport.addSport(e.target.value)
      .then((data)=>console.log(data))
      .catch((err)=>console.log(err))


  }

  render() {
    const {inputs} = this.state;
    return (
      <div className="preferences">
        <Navbar/>
        <div className="preferences-title-container">
          <p className="preferences-title">Choose your passion</p>
        </div>
        <div className="preferences-options">
          {inputs.map((input, i)=>{

            return <div key={i} >
                <button onClick={this.handleOnClick} value={input} className="btn option">{input}</button>
              </div>
          })}
        </div>
      </div>
    )
  }
}


export default withAuth(Preference)
