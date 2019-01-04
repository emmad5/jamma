import axios from 'axios';

export const getBusinesses = () => {
    return axios.get('/api/businesses');
};