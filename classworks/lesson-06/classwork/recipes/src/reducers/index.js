import { combineReducers } from 'redux';

import toggleActiveReducer from './toggleActiveReducer';
import editReducer from './editReducer';

const rootReducer = combineReducers({
	editReducer: editReducer,
	toggleActiveReducer: toggleActiveReducer
});


export default rootReducer;

