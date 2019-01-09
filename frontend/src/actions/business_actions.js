import * as APIUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS_ERRORS = "RECEIVE_BUSINESS_ERRORS";
export const DELETE_ONE_BUSINESS = "DELETE_ONE_BUSINESS"


export const receiveAllBusinesses = businesses => ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses
});

export const receiveErrors = errors => ({
    type: RECEIVE_BUSINESS_ERRORS,
    errors
});

export const deleteOneBusiness = businessData => ({
    type: DELETE_ONE_BUSINESS,
    businessData
})

export const getBusinesses = () => dispatch => (
    APIUtil.getBusinesses().then(businesses => (
        dispatch(receiveAllBusinesses(businesses))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const addBusiness = businessData => dispatch => (
    APIUtil.addBusiness(businessData)
    .catch(err => (dispatch(receiveErrors(err.response.data))))
);

export const removeBusiness = businessData => dispatch => {
    APIUtil.removeBusiness(businessData)
    .then(dispatch(deleteOneBusiness(businessData)))
};