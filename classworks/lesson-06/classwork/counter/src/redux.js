const increment = document.querySelector('.inc');
const decrement = document.querySelector('.dec');
const counter = document.querySelector('.counter');

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, counter: state.counter + 1 };
    case 'DEC':
      return { ...state, counter: state.counter - 1 };
  }

  return state;
};

const store = Redux.createStore(reducer);

const render = () => {
  console.log(store.getState().counter);

  counter.innerHTML = store.getState().counter;
};

store.subscribe(render);

increment.addEventListener('click', () => {
  store.dispatch({ type: 'INC' });
});

decrement.addEventListener('click', () => {
  store.dispatch({ type: 'DEC' });
});
