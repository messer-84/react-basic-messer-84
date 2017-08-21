import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Github, Button, Header, Name, Wrapper } from './gitQuery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1,
      counter: 0,
    };
    this.tabs = [
      {
        id: 0,
        component: <Github />,
      },
      {
        id: 1,
        component: (
          <Header increment={this.increment} counter={this.state.counter} />
        ),
      },
      {
        id: 2,
        component: <Name name="Maksim" />,
      },
    ];
    this.increment = this.increment.bind(this);
  }

  increment() {
    console.log('this', this);

    this.setState(function (prevState) {
      return {counter: prevState.counter + 1}
		});
  }
  update(e) {
    let tabId = e.target.id;
    let allTabs = document.querySelectorAll('button[id]');
    [...allTabs].forEach(tab => {
        tab.className = tab.id === tabId ? 'active' : '';
    });

    this.setState({
      activeTab: tabId,
    });
  }

  render() {
    return (
      <div className="App">
        <button className="active"
          id="0"
          onClick={e => {
            this.update(e);
          }}
        >
          1
        </button>
        <button
          id="1"
          onClick={e => {
            this.update(e);
          }}
        >
          2
        </button>
        <button
          id="2"
          onClick={e => {
            this.update(e);
          }}
        >
          3
        </button>
        <Wrapper>
          {this.tabs[this.state.activeTab].component}
        </Wrapper>
      </div>
    );
  }
}

export default App;
