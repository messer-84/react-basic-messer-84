const historyReducer = (state = { counter: 0, prevCounters: [0] }, action) => {
  if (action.type === 'INC') {
    state.counter += 1;
  }
  if (action.type === 'DEC') {
    state.counter -= 1;
  }

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
        prevCounters: removeDuplicatesFunc(state.prevCounters),
      };
    default:
      return state;
  }
};

export default historyReducer;
