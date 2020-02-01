import TravelsReducer from './TravelsReducer';
import { combineReducers } from 'redux';
import RequestsReducer from './RequestsReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
	travels: TravelsReducer,
	requests: RequestsReducer,
	users: UsersReducer
});