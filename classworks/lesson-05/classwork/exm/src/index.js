import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

const initialState = [
	'Smells like spirit',
		'Enter Sandman'
];

function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [...state, action.payload];
  }

  return state;
}

const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

//
//
// import { createStore } from 'redux';
//

//
// const store = createStore(playlist);
//
// store.subscribe(() => {
// 	console.log('subscribe', store.getState());
//
// });
//
// store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
// store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sadman' });
//
