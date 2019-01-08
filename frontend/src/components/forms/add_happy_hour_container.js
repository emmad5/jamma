import { connect } from 'react-redux';
import AddHappyHour from './add_happy_hour';
import { addBusiness } from '../../actions/business_actions';


const mstp = (state, ownProps) => {;
    return {
    }
};
const mdtp = (dispatch, ownProps) => {
    return {
        addBusiness: businessData => dispatch(addBusiness(businessData))
    };
};


export default connect(
    mstp,
    mdtp
)(AddHappyHour);