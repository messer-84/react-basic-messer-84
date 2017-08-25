import React, { Component } from 'react';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import Signout from '../Auth/Signout';
import Users from '../Auth/Users';


import './Main.css';
import { Route, Switch } from 'react-router-dom';

const NotFound = () => <h1>Not found</h1>;

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          {/*<Route path="/signout" component={Signout} />*/}
          <Route path="/" />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
