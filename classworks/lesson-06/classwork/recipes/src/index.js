import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const initialState = {
  recipes: [
    {
      name: 'pizza',
      ingridients: [
        { name: 'cheeze', quanity: 2 },
        { name: 'milk', quanity: 1 },
      ],
    },
    { name: 'omelette' },
    { name: 'potato' },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
