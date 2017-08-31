const reducer = (state = { counter: 0, prevCounters: [0] }, action) => {
  const removeDuplicatesFunc = elems => {
    let arr = [];
    elems.forEach(elem => {
      if (!arr.includes(elem)) {
        arr.push(elem);
      }
    });
    return arr;
  };

  switch (action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1,
        prevCounters: [...state.prevCounters, state.counter + 1],
      };
    case 'DEC':
      return {
        ...state,
        counter: state.counter - 1,
        prevCounters: [...state.prevCounters, state.counter - 1],
      };
    case 'RESET':
      return {
        ...state,
        counter: 0,
        prevCounters: [],
      };

    case 'REMOVE_DUPLICATES':
      return {
        ...state,
        prevCounters: removeDuplicatesFunc(state.prevCounters),
      };
    default:
      return state;
  }
};

export default reducer;
