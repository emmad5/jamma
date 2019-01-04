import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import business from './business_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  business
});

export default RootReducer;