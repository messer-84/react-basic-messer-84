import {combineReducers} from 'redux';

import selectedbookReducer from '../reducers/reducer_selectedbook';

const rootReducer = {
  selectedbook: selectedbookReducer,
  books: booksReducer
};

export default rootReducer