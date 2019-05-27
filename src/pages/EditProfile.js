import React, { Component } from 'react';
import { withAuth } from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import profile from './../lib/profile-service';

class EditProfile extends Component {
  state = {
    username: '',
    email: '',
    city: ''
    // image: ''
  }

  handleFormSubmit = (e) => {
    console.log('LOG', this.state, this.props.user)
    e.preventDefault();
    const { username, email, city } = this.state;
    const { id } = this.props.match.params;

    profile.editOne(username, email, city)
    this.setState({
      username: '',
      email: '',
      city: ''
      // image: ''
    })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fileOnchange = (event) => { //image after cloudinary
    const file = event.target.files[0];
    const uploadData = new FormData()
    uploadData.append('photo', file)

    profile.imageUpload(uploadData)
    .then((image) => {
      this.setState({
        image,
        disable: false,
      })
    })
    .catch((error) => console.log(error))
  }


  render() {
    return (
      <div>

        <Link to='/buddies'><button>Buddies</button></Link>

        <form onSubmit={this.handleFormSubmit}>
          <label>User Name:</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.username}
              onChange={this.handleChange}
            />

            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.email}
              onChange={this.handleChange}
            />

            <label>City:</label>
            <input
              type="text"
              name="city"
              placeholder="city"
              value={this.city}
              onChange={this.handleChange}
            />

            <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}
export default withAuth(EditProfile);
