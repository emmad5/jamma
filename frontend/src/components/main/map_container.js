import { connect } from 'react-redux';
import Map from './map';
import { getBusinesses } from '../../actions/business_actions';
import {openModal} from '../../actions/modal_actions'
const mstp = state => {
    const happyHours = [
        { lat: 37.775785, lng: -122.445979, name: "Papalote" },
        { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" },
        { lat: 37.781899, lng: -122.410426, name: "Cancun" }
    ];

    let businesses = [];
    
    if (state.business.data) {
        businesses = state.business.data
    }

    return {
        errors: state.errors.session,
        businesses: businesses,
        happyHours: happyHours
    };
};

const mdtp = dispatch => {
    return {
        getBusinesses: () => dispatch(getBusinesses()),
        openModal: modal => dispatch(openModal(modal))

    };
};

export default connect(
    mstp,
    mdtp
)(Map);