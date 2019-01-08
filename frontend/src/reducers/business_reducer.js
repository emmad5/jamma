import { RECEIVE_ALL_BUSINESSES } from '../actions/business_actions';
import merge from 'lodash/merge';

export default function (prevState = {}, action) {
    Object.freeze(prevState);
    // let nextState = merge({}, prevState);
    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return merge({}, action.businesses.data);
        default:
            return prevState;
    }
}