import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import business from './business_reducer';
import ui from './ui_reducer';


const RootReducer = combineReducers({
  session,
  errors,
  business,
  ui
});

export default RootReducer;