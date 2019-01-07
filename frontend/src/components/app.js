import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Redirect, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import Profile from './profile/profile'
import SignupFormContainer from './session/signup_form_container';
import Modal from './modal'
import './reset.scss'; 


const App = () => (
  <div>
    <NavBarContainer />
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={LoginFormContainer} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;