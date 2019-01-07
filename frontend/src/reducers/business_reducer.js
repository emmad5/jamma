import {
    RECEIVE_ALL_BUSINESSES,
    RECEIVE_ONE_BUSINESSES,
    EDIT_ONE_BUSINESS
} from '../actions/business_actions';
import merge from 'lodash/merge';

export default function (prevState = {}, action) {
    let nextState = merge({}, prevState);
    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses.data;
        default:
            return prevState;
    }
}