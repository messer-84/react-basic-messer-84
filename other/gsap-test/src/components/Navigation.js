import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import animateBox from '../animations/animateBox';
import Home from './Home';
import About from './About';
import AppFirst from './AppFirst';
import AppSecond from './AppSecond';

import '../App.css';

const history = createBrowserHistory();
const NotFound = () => <h1>Not found</h1>;

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/animation">Animation page</Link>
            </li>
            <li>
              <Link to="/animation2">Animation page 2</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={() => <Home/>} />
            <Route path="/about" component={About} />
            <Route path="/animation" component={()=> <AppFirst title="GSAP" />} />
            <Route path="/animation2" component={()=> <AppSecond title="CLICK" />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default Navigation;
