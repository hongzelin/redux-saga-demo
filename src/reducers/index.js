import { combineReducers } from 'redux';
import us from './users';
import counter from './counter';

export default combineReducers({
  us,
  counter
})