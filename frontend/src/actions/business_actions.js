import * as APIUtil from '../util/business_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS_ERRORS = "RECEIVE_BUSINESS_ERRORS"

// We'll dispatch this when our user signs in
export const receiveAllBusinesses = businesses => ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses
});

export const receiveErrors = errors => ({
    type: RECEIVE_BUSINESS_ERRORS,
    errors
});

export const getBusinesses = () => dispatch => (
    APIUtil.getBusinesses().then((businesses) => (
        dispatch(receiveAllBusinesses(businesses))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);