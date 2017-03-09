import React from 'react';

const Login = props => (
  <div>
    <div className="page-header center-align">
      <h3>Log In</h3>
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
      <button type="submit" className="btn waves-effect waves-light">Log In</button>
    </form>
  </div>
);

Login.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired
};

export default Login;
