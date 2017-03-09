import React from 'react';
import { Link } from 'react-router';

const Navbar = props => (
  <nav>
    <div className="nav-wrapper">
      <div className="container">
        {props.loggedInUser.name
          ? <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users/me/edit">Edit Profile</Link></li>
            <li><Link to="#" onClick={props.logout}>Log Out</Link></li>
          </ul>
          : <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        }
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  logout: React.PropTypes.func, // eslint-disable-line react/require-default-props
  loggedInUser: React.PropTypes.shape({
    name: React.PropTypes.string
  }).isRequired
};

export default Navbar;
