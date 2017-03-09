import React from 'react';
import Login from '../components/Login';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Instead of having `handleEmailChange` and `handlePasswordChange` and etc.,
  // this is a general function for all fields.
  handleChange(formField, value) {
    this.setState({ [formField]: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // Send axios request to log in
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <Login
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

LoginContainer.propTypes = {
  login: React.PropTypes.func // eslint-disable-line react/require-default-props
};

export default LoginContainer;
