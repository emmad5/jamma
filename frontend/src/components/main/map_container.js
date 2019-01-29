import { connect } from 'react-redux';
import Map from './map';
import { getBusinesses } from '../../actions/business_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
const mstp = state => {
    let businesses = [];
    if (state.business) {
        businesses = Object.values(state.business);
    }
    return {
        errors: state.errors.session,
        businesses: businesses
    };
};

const mdtp = dispatch => {
    return {
        getBusinesses: () => dispatch(getBusinesses()),
        openModal: (type, options) => dispatch(openModal(type, options)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(
    mstp,
    mdtp
)(Map);