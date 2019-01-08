import axios from 'axios';

export const getBusinesses = () => {
    return axios.get('/api/businesses');
};

export const editBusiness = businessData => {
    return axios.patch(`/api/businesses/${businessData._id}`, businessData);
};

export const addBusiness = businessData => {
    return axios.post('/api/businesses', businessData);
};

export const removeBusiness = businessData => {
    return axios.delete(`/api/businesses/${businessData._id}`, businessData);
};