import { connect } from 'react-redux';
import { removeBusiness } from '../../actions/business_actions';
import HappyHourShow from './happy_hour_show';
import {closeModal} from '../../actions/modal_actions';


const mdtp = dispatch => {
    return {
        removeBusiness: businessData => dispatch(removeBusiness(businessData)),
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(
    null,
    mdtp
)(HappyHourShow);