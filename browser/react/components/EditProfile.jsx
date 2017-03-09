import React from 'react';
import { Link } from 'react-router';

const EditProfile = props => (
  <div>
    {props.loggedInUser.email
      ? <div>
        <div className="page-header center-align">
          <h3>Edit Profile</h3>
        </div>
        <form onSubmit={props.handleSubmit}>
          <div>
            <input
              name="email"
              type="email"
              placeholder={`Current Email Address: ${props.loggedInUser.email}`}
              onChange={evt => props.handleChange('email', evt.target.value)}
              value={props.email}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Change Password"
              onChange={evt => props.handleChange('password', evt.target.value)}
              value={props.password}
            />
          </div>
          <div>
            <input
              name="name"
              type="text"
              placeholder={`Current Display Name: ${props.loggedInUser.name}`}
              onChange={evt => props.handleChange('name', evt.target.value)}
              value={props.name}
            />
          </div>
          <div>
            <input
              name="picture"
              type="text"
              placeholder={`Current Profile Picture: ${props.loggedInUser.picture}`}
              onChange={evt => props.handleChange('picture', evt.target.value)}
              value={props.picture}
            />
          </div>
          <div>
            <textarea
              name="description"
              type="text"
              placeholder={`Current Profile Description: ${props.loggedInUser.description}`}
              onChange={evt => props.handleChange('description', evt.target.value)}
              value={props.description}
              className="materialize-textarea"
            />
          </div>
          <button type="submit" className="btn waves-effect waves-light">Save</button>
        </form>
      </div>
      : <div className="page-header center-align">
        <h5>You need to be logged in to edit your profile.</h5>
        <Link to="/login" className="btn waves-effect waves-light">Log In</Link>
      </div>
    }
  </div>
);

EditProfile.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  picture: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  loggedInUser: React.PropTypes.shape({
    email: React.PropTypes.string,
    name: React.PropTypes.string,
    picture: React.PropTypes.string,
    description: React.PropTypes.string
  }).isRequired
};

export default EditProfile;
