const selectedbookReducer = (state = null, action) => {
  switch (action.type){
    case 'BOOK_SELECT':
      return action.data;
    default:
      return state;
  }
};

export default selectedbookReducer