import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import auth from "./auth-service";
// import React, { Component } from "react";
// import { withAuth } from "../lib/AuthProvider";


function Preference() {
  return (
    <div>
      <h1>I am Preferences</h1>


      <Link to={'/feed'}>
      <button>feed</button>
      </Link>
    </div>
  )
}

export default Preference
