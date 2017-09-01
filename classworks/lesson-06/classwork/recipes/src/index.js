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
      id: 0,
      isActive: true,
      name: 'Recipe-1',
      ingredients: [
        {
          name: 'ing-1',
          quanity: '100g',
        },
        {
          name: 'ing-2',
          quanity: '200g',
        },
        {
          name: 'ing-3',
          quanity: '300g',
        },
      ],
    },
    {
      id: 1,
      isActive: false,
      name: 'Recipe-2',
      ingredients: [
        {
          name: 'ing-1',
          quanity: '150g',
        },
        {
          name: 'ing-2',
          quanity: '250g',
        },
        {
          name: 'ing-3',
          quanity: '350g',
        },
      ],
    },
    {
      id: 2,
      isActive: false,

      name: 'Recipe-3',
      ingredients: [
        {
          name: 'ing-1',
          quanity: '100g',
        },
        {
          name: 'ing-2',
          quanity: '200g',
        },
        {
          name: 'ing-3',
          quanity: '300g',
        },
      ],
    },
    {
      id: 3,
      isActive: false,
      name: 'Recipe-4',
      ingredients: [
        {
          name: 'ing-1',
          quanity: '100g',
        },
        {
          name: 'ing-2',
          quanity: '200g',
        },
        {
          name: 'ing-3',
          quanity: '300g',
        },
      ],
    },
    {
      id: 4,
      isActive: false,
      name: 'Recipe-5',
      ingredients: [
        {
          name: 'ing-1',
          quanity: '100g',
        },
        {
          name: 'ing-2',
          quanity: '200g',
        },
        {
          name: 'ing-3',
          quanity: '300g',
        },
      ],
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
