import React, { Component } from 'react';
import './theme/App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Api from './services/api'


class App extends Component {
  constructor(){
    super();
    this.state = {
      user: 'no auth'
    };

  }
  update(config) {
    this.setState(config);
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <Main />

      </div>
    );
  }
}

const app = new App();
export { App, app};
