import React, { Component } from 'react';

class Counter extends Component {

  render() {

    const { increment, decrement, counter } = this.props;

    return (
      <div >
        <h1>{counter}</h1>
        <div className="holder">
       <button onClick={decrement}> - </button>
        <div className="text">{counter}</div>
        <button onClick={increment}> + </button>
        </div>
      </div>
    );
  }

}

export default Counter;
