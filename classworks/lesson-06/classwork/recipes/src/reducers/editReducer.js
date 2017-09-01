const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'DEC':
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

export default reducer;
