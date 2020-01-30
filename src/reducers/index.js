import TravelsReducer from './TravelsReducer';
import { combineReducers } from 'redux';
import RequestsReducer from './RequestsReducer';

export default combineReducers({
	travels: TravelsReducer,
	requests: RequestsReducer
});