import React, { Component } from 'react';

import animateBox from './animations/animateBox';
import './App.css';

class AppFirst extends Component {
  componentDidMount() {
    animateBox();
  }
  render() {
    const { title } = this.props;
    return (
      <div className="App">
        <div id="box">
          {title}
        </div>
      </div>
    );
  }
}

export default AppFirst;
