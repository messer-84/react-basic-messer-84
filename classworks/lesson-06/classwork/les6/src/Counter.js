import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement  } from './actions/index';
import { historyUpdate, reset, removeDuplicates} from './actions/history-action';

class Counter extends Component {
  showHistory(history) {
    console.log(history);

    return history.map((num, index) =>
      <li key={index.toString()}>
        {num}
      </li>,
    );
  }

  render() {
    console.log('props -', this.props);
    const {
      counter,
      increment,
      historyUpdate,
      decrement,
      prevCounters,
      reset,
      removeDuplicates,
    } = this.props;
    const history = this.showHistory(prevCounters);

    return (
      <div>
        <div>
          Counter: <span>{counter}</span>
        </div>
        <button
          onClick={() => {
            increment();
            historyUpdate();
          }}
        >
          INCREMENT
        </button>
        <button
          onClick={() => {
            decrement();
            historyUpdate();
          }}
        >
          DECREMENT
        </button>
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
    prevCounters: state.historyReducer.prevCounters,
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
    historyUpdate() {
      dispatch(historyUpdate());
    },
    reset() {
      dispatch(reset());
    },
    removeDuplicates() {
      dispatch(removeDuplicates());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
