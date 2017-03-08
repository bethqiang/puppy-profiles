import React from 'react';

const AllUsers = props => (
  <div>
    {props.allUsers.map(user => (
      <div key={user.name}>
        <h1>{user.name}</h1>
        <img src={user.picture} alt={`${user.name} profile`} />
        <p>{user.description}</p>
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
