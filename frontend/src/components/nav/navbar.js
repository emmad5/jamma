import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
// import logo from './lama_no_bg.png';
import logo from './lamalogo_nobg_emma.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/profile'}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='headings'>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  renderSessionButtons() {
    return(
      <label className="left-buttons">
        <Link to={'/login'}>
          <button className="login-btn">Log In</button>
        </Link>
        <h4 className="or">or</h4>
        <Link to={'/signup'}>
          <button className="signup-btn">Sign Up</button>
        </Link>
      </label>
    )
  }

  renderLogoutButton() {
    return (
      <label className="right-buttons">
        <button className="logout-button" onClick={this.logoutUser}>Logout</button>
      </label>
    )
  }

  render() {
    return (
      <div className='navbar'>


        <div className="logo-flex">
          <Link to={'/'}><img className="logo-img" src={logo} width="30px" height="40px" /></Link>
          <Link to={'/'} className="jamma-title-link"><h1 className="jamma-title">JAMMA</h1></Link>
        </div>

        {/* {this.getLinks()} */}
        <div className="session-buttons">
          { this.props.loggedIn ? this.renderLogoutButton() : this.renderSessionButtons() }
        </div>
      </div>
    );
  }
}

export default NavBar;