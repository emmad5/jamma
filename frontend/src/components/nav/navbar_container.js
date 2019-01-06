import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mstp = state => {
  return {
    loggedIn: state.session.isAuthenticated
  }
};

export default connect(
  mstp,
  { logout }
)(NavBar);