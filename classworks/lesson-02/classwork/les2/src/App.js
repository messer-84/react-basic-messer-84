import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      showingText: 'Javascript',
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment(){
    this.setState(function (prevState) {
      return {counter: prevState.counter + 1}
    });


  }
  decrement(){
    this.setState(function (prevState) {
      return {counter: prevState.counter - 1}
    });
  }
  updateShowingText() {
    this.setState({
      showingText:
        this.state.showingText === 'Javascript' ? '5000$' : 'Javascript',
    });
  }
  render() {
    return (
      <div>
        <h1>
          Hello {this.state.showingText}
        </h1>
        <button onClick={this.updateShowingText.bind(this)}>Button</button>
        <Counter counter={this.state.counter}
        increment={this.increment}
        decrement ={this.decrement}
        />
        <Counter counter={this.state.counter}
        increment={this.increment}
        decrement ={this.decrement}
        />
        <Counter counter={this.state.counter}
        increment={this.increment}
        decrement ={this.decrement}
        />

      </div>
    );
  }
}

export default App;
