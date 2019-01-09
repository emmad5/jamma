import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Redirect, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import Profile from './profile/profile'
import SignupFormContainer from './session/signup_form_container';
import Modal from './modal';
import './reset.scss'; 
import AddHappyHour from './forms/add_happy_hour_container';
import Splash from './splash/splash'


const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/map" component={() => (<div><NavBarContainer/><Profile/></div>)} />
      <ProtectedRoute exact path="/add" component={() => (<div><NavBarContainer/><AddHappyHour/></div>)} />
      <AuthRoute exact path="/login" component={() => (<div><NavBarContainer/><LoginFormContainer/></div>)}/>
      <AuthRoute exact path="/signup" component={() => (<div><NavBarContainer/><SignupFormContainer/></div>)} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;