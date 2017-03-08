import React from 'react';
import { Link } from 'react-router';

const AllUsers = props => (
  <div>
    {props.allUsers.map(user => (
      <div key={user.name}>
        <Link to={`/users/${user.name}`}>
          <h1>{user.name}</h1>
          <img src={user.picture} alt={`${user.name} profile`} />
          <p>{user.description}</p>
        </Link>
      </div>
    ))}
  </div>
);

AllUsers.propTypes = {
  allUsers: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    picture: React.PropTypes.string,
    description: React.PropTypes.string
  }))
};

AllUsers.defaultProps = {
  allUsers: []
};

export default AllUsers;
