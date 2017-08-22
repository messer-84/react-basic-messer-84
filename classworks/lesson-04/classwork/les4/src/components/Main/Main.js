import React, { Component } from 'react';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Signout from '../Signout/Signout';

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
          <Route path="/signout" component={Signout} />
          <Route path="/" component={Signin} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
