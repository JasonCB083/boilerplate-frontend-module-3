import React, { Component } from 'react';
import { withAuth } from './../lib/AuthProvider';
import { Link } from 'react-router-dom';
import profile from './../lib/profile-service';
import Navbar from "./../components/Navbar";


class EditProfile extends Component {

  state = {
    username: '',
    email: '',
    city: '',
    image: '',
    sport: ''
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, email, city, image, sport} = this.state;
    const { id } = this.props.match.params;

    profile.editOne(username, email, city, image, sport)
      .then(() => {
        this.getUserProfile()
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
    console.log(uploadData)
    profile.imageUpload(uploadData)
    .then((image) => {
      this.setState({
        image,
        disable: false,
      })
    })
    .catch((error) => console.log(error))
  }

  getUserProfile = () => {
    profile.getOne(this.props.user._id)
    .then((data) => {
      let { city } = this.state;
      city = city.length === 0 ? "Barcelona" : city;
      this.setState({ username: data.username, city})
    })
  }

  componentDidMount() {
    this.getUserProfile()
  }

  render() {
    const { username, email, city, image, sport} = this.state;
    return (
      <div className="editprofile">
      <div>
      <Navbar/>
        </div>
        {/* <Link to={'/feed'}>
        <button>feed</button>
        </Link>

        <Link to={'/preference'}>
        <button>Preference</button>
        </Link> */}

        {/* <button onClick={logout}>log out</button> */}
        <form className="editprofile-form" onSubmit={this.handleFormSubmit}>
            <input className="editprofile-input"
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={this.handleChange}
            />

            <input className="editprofile-input"
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={this.handleChange}
            />

            <input className="editprofile-input"
              type="text"
              name="city"
              placeholder="city"
              value={city}
              onChange={this.handleChange}
            />

            <input className="editprofile-input"
              type="text"
              name="sport"
              placeholder="sport"
              value={this.sport}
              onChange={this.handleChange}
            />

            <label>Picture:</label>
            <div className="picture">
              <img className="camera" src="https://image.flaticon.com/icons/svg/159/159829.svg"/>
              <input
                placeholder="picture"
                type="file"
                onChange={this.fileOnchange}
              />
            </div>

            <input className="btn" type="submit" value="Update" />
        </form>
      </div>
    )
  }
}
export default withAuth(EditProfile)
