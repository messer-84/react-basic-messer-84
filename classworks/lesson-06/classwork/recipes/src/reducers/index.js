import { combineReducers } from 'redux';

import toggleActiveReducer from './toggleActiveReducer';
import editReducer from './reducer_recipes';

const rootReducer = combineReducers({
	editReducer: editReducer,
	toggleActiveReducer: toggleActiveReducer
});


export default rootReducer;

