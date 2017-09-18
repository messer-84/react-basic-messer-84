import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import animateBoxTarget from '../animations/animateBoxTarget';

import '../App.css';

class AppSecond extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="App">
        <h2>Animation-2 with GSAP</h2>
        <div id="box" onClick={animateBoxTarget}>
          {title}
        </div>
      </div>
    );
  }
}

export default AppSecond;
