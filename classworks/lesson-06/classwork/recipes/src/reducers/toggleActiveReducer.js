const reducer = (state = { recipeIndex: 1 }, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        recipeIndex: state.recipeIndex + 1,
      };

    default:
      return state;
  }
};

export default reducer;
