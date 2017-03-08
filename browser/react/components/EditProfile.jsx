import React from 'react';

const EditProfile = props => (
  <div>
    <h3>Edit Profile</h3>
    <form onSubmit={props.handleSubmit}>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={evt => props.handleChange('email', evt.target.value)}
          value={props.email}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={evt => props.handleChange('password', evt.target.value)}
          value={props.password}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Confirm Password"
          onChange={evt => props.handleChange('confirmPassword', evt.target.value)}
          value={props.confirmPassword}
        />
      </div>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={evt => props.handleChange('name', evt.target.value)}
          value={props.name}
        />
      </div>
      <div>
        <input
          name="picture"
          type="text"
          placeholder="Picture URL"
          onChange={evt => props.handleChange('picture', evt.target.value)}
          value={props.picture}
        />
      </div>
      <div>
        <input
          name="description"
          type="text"
          placeholder="Description"
          onChange={evt => props.handleChange('description', evt.target.value)}
          value={props.description}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
);

EditProfile.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  confirmPassword: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  picture: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};

export default EditProfile;
