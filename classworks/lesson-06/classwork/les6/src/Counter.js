import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './actions/index';

class Counter extends Component {
  showHistory(history){

  }
  render() {
    console.log(this.props);
    const {counter, increment, decrement, prevCounters} = this.props;
    const history = this.showHistory(prevCounters );
    return (
      <div>
        <div>
          Counter: <span>{counter}</span>
        </div>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <span>{prevCounters}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
