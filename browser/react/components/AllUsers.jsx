import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: []
    };
  }

  componentDidMount() {
    axios.get('/api/users')
    .then(res => res.data)
    .then(users => this.setState({ allUsers: users }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.allUsers.map(user => (
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
  }
}

export default AllUsers;
