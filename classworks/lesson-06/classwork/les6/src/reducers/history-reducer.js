const historyReducer = (state = { prevCounters: [100] }, action) => {
  console.log(action.type);

  switch (action.type) {
    case 'RESET':
      return { ...state, prevCounters: [100] };
    default:
        return state;
  }
};

export default historyReducer;