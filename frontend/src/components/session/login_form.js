import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './session.css';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoHandleSubmit = this.demoHandleSubmit.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/map');
    }

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
      password: this.state.password
    };

    this.props.login(user);
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
      <div> 
        <div className="session-title">
          <h1>Enjoy Happy Hours Near You</h1>
        </div>
       
        <div className = "session-form" >
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
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
                <br />
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
            
            <br /> 
            <div className='signup'>
              <Link className="already-text" to={'/signup'}>New to Jamma? Signup</Link>
              
            </div>
            <br/>
            {this.renderErrors()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);