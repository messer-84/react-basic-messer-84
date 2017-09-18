import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import animateBox from '../animations/animateBox';
import '../App.css';

const history = createBrowserHistory();

class AppFirst extends Component {
  componentDidMount() {
    animateBox();
  }
  render() {
    const { title } = this.props;
    return (
      <div className="App">
        <h2>Animation-1 with GSAP</h2>
        <div id="box">
          {title}
        </div>
      </div>
    );
  }
}

export default AppFirst;
