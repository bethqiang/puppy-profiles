import React from 'react';

import EditProfile from '../components/EditProfile';

class EditProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      picture: '',
      description: ''
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
    const toSend = {};
    if (this.state.email) toSend.email = this.state.email;
    if (this.state.password) toSend.password = this.state.password;
    if (this.state.name) toSend.name = this.state.name;
    if (this.state.picture) toSend.picture = this.state.picture;
    if (this.state.description) toSend.description = this.state.description;
    // Send axios request to edit profile route
    this.props.editProfile(toSend);
  }

  render() {
    return (
      <EditProfile
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        password={this.state.password}
        name={this.state.name}
        picture={this.state.picture}
        description={this.state.description}
      />
    );
  }
}

EditProfileContainer.propTypes = {
  editProfile: React.PropTypes.func // eslint-disable-line react/require-default-props
};

export default EditProfileContainer;
