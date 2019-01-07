import { connect } from 'react-redux';
import Map from './map';
import { getBusinesses } from '../../actions/business_actions';
import {openModal} from '../../actions/modal_actions';
const mstp = state => {
    let businesses = [];
    if (state.business) {
        businesses = state.business;
    }
    return {
        errors: state.errors.session,
        businesses: businesses
    };
};

const mdtp = dispatch => {
    return {
        getBusinesses: () => dispatch(getBusinesses()),
        openModal: (options) => dispatch(openModal('happyhour', options))
    };
};

export default connect(
    mstp,
    mdtp
)(Map);