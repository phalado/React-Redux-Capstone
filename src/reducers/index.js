import { combineReducers } from 'redux';
import heroes from './heroes';
import filter from './filter';
import render from './render';

const rootReducer = combineReducers({
  heroes,
  filter,
  render,
});

export default rootReducer;
