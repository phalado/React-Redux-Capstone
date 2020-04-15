import { combineReducers } from 'redux';
import heroes from './heroes';
import filter from './filter';

const rootReducer = combineReducers({
  heroes,
  filter,
});

export default rootReducer;
