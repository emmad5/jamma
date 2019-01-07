import axios from 'axios';

export const getBusinesses = () => {
    return axios.get('/api/businesses');
};

export const editBusiness = businessData => {
    return axios.post('/api/businesses');
};

export const addBusiness = businessData => {
    return axios.patch('/api/businesses');
};