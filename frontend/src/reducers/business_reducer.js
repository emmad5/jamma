import {
    RECEIVE_ALL_BUSINESSES,
    RECEIVE_ONE_BUSINESS
} from '../actions/business_actions';
import merge from 'lodash/merge';

export default function (prevState = {}, action) {
    Object.freeze(prevState);
    // let nextState = merge({}, prevState);
    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return merge({}, action.businesses.data);
        case RECEIVE_ONE_BUSINESS:
            debugger;
        default:
            return prevState;
    }
}