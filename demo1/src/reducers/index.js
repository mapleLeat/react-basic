import { combineReducers } from 'redux';
import personsReducer from './personsReducer';

export default combineReducers({
  person: personsReducer
})