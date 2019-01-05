import { connect } from 'react-redux';
import Map from './map';
import { getBusinesses } from '../../actions/business_actions'

const mstp = state => {
    return {
        errors: state.errors.session,
        businesses: Object.values(state.business)
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