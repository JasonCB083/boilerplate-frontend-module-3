import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import Preference from "./pages/Preference";
import Prelogin from "./components/Prelogin";
import Feed from "./components/Feed";

class App extends Component {
  render() {
    return (
      <AuthProvider>
          <Switch>
            <AnonRoute exact path="/" component={Prelogin} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/private" component={Private} />
            <PrivateRoute exact path="/Preference" component={Preference}/>
            <PrivateRoute exact path="/Feed" component={Feed}/>
            <Route exact path="/*" component={Error}/>
          </Switch>
      </AuthProvider>
    );
  }
}

export default App;
