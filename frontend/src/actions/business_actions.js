import * as APIUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS_ERRORS = "RECEIVE_BUSINESS_ERRORS";
export const RECEIVE_ONE_BUSINESSES = "RECEIVE_ONE_BUSINESS";
export const EDIT_ONE_BUSINESS = "EDIT_ONE_BUSINESS";


export const receiveAllBusinesses = businesses => ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses
});

export const receiveOneBusiness = business => ({
    type: RECEIVE_ONE_BUSINESSES,
    business
});

export const editOneBusiness = business => ({
    type: EDIT_ONE_BUSINESS,
    business
})

export const receiveErrors = errors => ({
    type: RECEIVE_BUSINESS_ERRORS,
    errors
});

export const getBusinesses = () => dispatch => (
    APIUtil.getBusinesses().then(businesses => (
        dispatch(receiveAllBusinesses(businesses))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const addBusiness = businessData => dispatch => (
    APIUtil.addBusiness(businessData).then(business => (
        dispatch(receiveOneBusiness(business)
    ), err => (
        dispatch(receiveErrors(err.response.data))
    )
    ))
);

export const editBusiness = businessData => dispatch => (
    APIUtil.editBusiness(businessData).then(business => (
        dispatch(editOneBusiness(business)), err => (
            dispatch(receiveErrors(err.response.data))
        )
    ))
);