import React, { Component } from 'react'
import { withAuth } from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import sport from "./../lib/sport-service";
import Navbar from "./../components/Navbar";


class Preference extends Component {
  state ={
    inputs: [],
  }
  componentDidMount(){
    this.setState({
      inputs: ['climbing', 'soccer', 'baseball', 'volleyball', 'basketball', 'tennis'],
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
    const {user, logout, isLoggedin} = this.props;
    const {inputs} = this.state;
    return (
      <div>
        <Navbar/>
        <h1>I am Preferences</h1>
        {inputs.map((input)=>{

          return <div style={{display: "flex", justifyContent: "space-around", flexDirection:"column", alignItems:"center"}}><p>test</p><button onClick={this.handleOnClick} value={input} className="btn">{input}</button></div>
        })}
        <Link to={'/feed'}>
        <button>feed</button>
        </Link>

        <button onClick={logout}>log out</button>
      </div>
    )
  }
}


export default withAuth(Preference)
