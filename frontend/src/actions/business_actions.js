import * as APIUtil from '../util/business_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";

// We'll dispatch this when our user signs in
export const receiveAllBusinesses = businesses => ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses
});

export const getBusinesses = () => dispatch => (
    APIUtil.getBusinesses().then(() => (
        dispatch(receiveAllBusinesses(businesses))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);