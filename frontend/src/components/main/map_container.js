import { connect } from 'react-redux';
import Map from './map';
import { getBusinesses } from '../../actions/business_actions'

const mstp = state => {
    const happyHours = [
        { lat: 37.775785, lng: -122.445979, name: "Papalote" },
        { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" },
        { lat: 37.781899, lng: -122.410426, name: "Cancun" }
    ];
    return {
        errors: state.errors.session,
        businesses: Object.values(state.business),
        happyHours: happyHours
    };
};

const mdtp = dispatch => {
    return {
        getBusinesses: () => dispatch(getBusinesses())
    };
};

export default connect(
    mstp,
    mdtp
)(Map);