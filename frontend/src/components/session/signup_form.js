import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      // handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.demoHandleSubmit = this.demoHandleSubmit.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/profile');
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
      // handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
    this.props.login(user);

  }

  demoHandleSubmit(e) {
    e.preventDefault();
    const user2 = Object.assign({ email: 'jamal@ballislife.com', password: 'password' });
    this.props.login(user2);
  }

  renderErrors() {
    return (
      <ul>
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <input
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
            <input
              type="submit"
              value="Submit"
            />
            {this.renderErrors()}
          </div>
        </form>
        <button className="demo-button" onClick={this.demoHandleSubmit}>Demo</button>

      </div>
    );
  }
}

export default withRouter(SignupForm);