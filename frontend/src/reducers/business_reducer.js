import { RECEIVE_ALL_BUSINESSES, DELETE_ONE_BUSINESS } from '../actions/business_actions';
import merge from 'lodash/merge';

export default function (prevState = {}, action) {
    Object.freeze(prevState);
    let nextState = merge({}, prevState);
    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return merge({}, action.businesses.data);
        case DELETE_ONE_BUSINESS:
            let deleteKey = Number(Object.keys(nextState).filter(key => nextState[key]._id === action.businessData._id)[0])
            delete nextState[deleteKey];
            return nextState
        default:
            return prevState;
    }
}