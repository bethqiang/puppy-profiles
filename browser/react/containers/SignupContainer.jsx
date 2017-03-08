import React from 'react';
import Signup from '../components/Signup';

class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      picture: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Instead of having `onEmailChange` and `onPasswordChange` and etc.,
  // this is a general function for all fields.
  handleChange(formField, value) {
    this.setState({ [formField]: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // Send axios request to sign up
    this.props.signup(
      this.state.email,
      this.state.password,
      this.state.name,
      this.state.picture,
      this.state.description
    );
  }

  render() {
    return (
      <Signup
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        password={this.state.password}
        confirmPassword={this.state.confirmPassword}
        name={this.state.name}
        picture={this.state.picture}
        description={this.state.description}
      />
    );
  }
}

SignupContainer.propTypes = {
  signup: React.PropTypes.func.isRequired
};

export default SignupContainer;
