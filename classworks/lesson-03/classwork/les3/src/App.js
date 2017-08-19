import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Github } from './gitQuery';
// import {Header} from './gitQuery';
// import {Button} from './gitQuery';

class MyGit extends Component {
  render() {
    return <div>Git</div>;
  }
}

class Counter extends Component {
  render() {
    return <div>Counter</div>;
  }
}

class Wrapper extends Component {
  render() {
    return <div />;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1,
    };
    this.update = this.update.bind(this);
  }

  update() {
    // this.setState({ activeIndex: this.props.children });
    console.log(this.props.children);

  }

  render() {
    // console.log(this);

    return (
      <div className="App">
        <button onClick={() => {this.update.bind(this)}}>1</button>
        <button onClick={() => {this.update.bind(this)}}>2</button>
        <button onClick={() => {this.update.bind(this)}}>3</button>
        <Wrapper />
      </div>
    );
  }
}

export default App;
