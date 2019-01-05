import { RECEIVE_BUSINESS_ERRORS } from '../actions/business_actions';

const _nullErrors = [];

const businessErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default businessErrorsReducer;