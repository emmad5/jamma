import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';

const RootReducer = combineReducers({
  tweets,
  session,
  errors
});

export default RootReducer;