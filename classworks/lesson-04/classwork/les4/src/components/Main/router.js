import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import Signout from '../auth/signout';
// import Main from './Main';


import './Main.css';

const NotFound = () => <h1>Not found</h1>;

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" component={Signout} />
          <Route path="/" component={Main} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
