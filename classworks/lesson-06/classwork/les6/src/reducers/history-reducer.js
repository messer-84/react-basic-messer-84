const historyReducer = (state = { counter: 0, prevCounters: [0] }, action) => {
  if (action.type === 'INC') {
    state = {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'DEC') {
    state = {
      ...state,
      counter: state.counter - 1,
    };
  }

  const removeDuplicates = prevCounters => {
    return prevCounters.filter(
      (elem, index, arr) => arr.indexOf(elem) === index,
    );
  };

  switch (action.type) {
    case 'HISTORY_UPDATE':
      return {
        ...state,
        prevCounters: [...state.prevCounters, state.counter],
      };
    case 'RESET':
      return {
        ...state,
        prevCounters: [],
      };

    case 'REMOVE_DUPLICATES':
      return {
        ...state,
        prevCounters: removeDuplicates(state.prevCounters),
      };
    default:
      return state;
  }
};

export default historyReducer;
