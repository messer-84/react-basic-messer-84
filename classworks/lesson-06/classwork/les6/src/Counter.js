import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset, removeDuplicates } from './actions/index';

class Counter extends Component {
  showHistory(history) {
    return history.map((num, index) =>
      <li key={index.toString()}>
        {num}
      </li>,
    );
  }

  render() {
    console.log('props -', this.props);
    const { counter, increment, decrement, prevCounters, reset, removeDuplicates } = this.props;
    const history = this.showHistory(prevCounters);

    return (
      <div>
        <div>
          Counter: <span>{counter}</span>
        </div>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <button onClick={reset}>Reset</button>
        <button onClick={removeDuplicates}>Remove Duplicates</button>
        <ul>
          {history}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter,
    prevCounters: state.counterReducer.prevCounters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch(increment());
    },
    decrement() {
      dispatch(decrement());
    },
    reset() {
      dispatch(reset());
    },
    removeDuplicates(){
      dispatch(removeDuplicates());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
