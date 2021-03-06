import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Chat from './chat';

const usersState = ['@john_123', '@alex_1984', '@chris'];
const reducer = (state = usersState, action) => {
  console.log(action);
  if(action.type === 'ADD_NEW_USER'){
    return state.concat(action.username);
  }
  return state;
};

const store = createStore(reducer);
window.store = store;

// store.subscribe(()=>{
//   console.log('store has been changed!');
// });

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Chat/>
        </div>
      </Provider>
    );
  }
}

export default App;
