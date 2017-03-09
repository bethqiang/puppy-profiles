import React from 'react';

const Signup = props => (
  <div>
    <div className="page-header center-align">
      <h3>Sign Up</h3>
    </div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={evt => props.handleChange('email', evt.target.value)}
          value={props.email}
          required
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={evt => props.handleChange('password', evt.target.value)}
          value={props.password}
          required
        />
      </div>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Display Name"
          onChange={evt => props.handleChange('name', evt.target.value)}
          value={props.name}
          required
        />
      </div>
      <div>
        <input
          name="picture"
          type="text"
          placeholder="Profile Picture URL"
          onChange={evt => props.handleChange('picture', evt.target.value)}
          value={props.picture}
        />
      </div>
      <div>
        <textarea
          name="description"
          type="text"
          placeholder="Profile Description"
          onChange={evt => props.handleChange('description', evt.target.value)}
          value={props.description}
          className="materialize-textarea"
        />
      </div>
      <button type="submit" className="btn waves-effect waves-light">Sign Up</button>
    </form>
  </div>
);

Signup.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  picture: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};

export default Signup;
