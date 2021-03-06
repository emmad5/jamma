import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './session.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.demoHandleSubmit = this.demoHandleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history)

  }

  demoHandleSubmit(e) {
    e.preventDefault();
    const user2 = Object.assign({ email: 'jamal@ballislife.com', password: 'password' });
    this.props.login(user2);
  }

  renderErrors() {
    return (
      <ul className='errors'>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-div"> 
        <div className="session-title">
          <h1>Enjoy Happy Hours Near You</h1>
 
        </div>
        <div className="session-form">
          <div className="session-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="inputs">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
                <br />
                <br />
                <input className="password-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
                <br />
                <input
                  type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                />
                <br />
                <br />
           
                  <input className="submit-btn"
                  type="submit"
                  value="Submit"
                />
                
              </div>
            </form>
            <br /> 
           
            <button className="demo-button" onClick={this.demoHandleSubmit}>Demo</button>
            <br /> 

            <div className='login'>
              <Link className="already-text" to={'/login'}>Already a User? Login</Link>
            </div>
            <br />
            {this.renderErrors()}
            <br /> 
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);