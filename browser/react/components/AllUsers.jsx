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
      <div className="container">
        <div className="users-header center-align">
          <h2>Puppy Profiles</h2>
          <h5>All dogs are available for adoption through <a href="https://www.austinpetsalive.org/">Austin Pets Alive!</a> as of 3/7.</h5>
        </div>
        <div className="row">
          {this.state.allUsers.map(user => (
            <div key={user.name} className="col m4">
              <Link to={`/users/${user.name}`}>
                <div className="card">
                  <div className="card-image">
                    <img src={user.picture} alt={`${user.name} profile`} />
                  </div>
                  <div className="card-content center-align">
                    <h5>{user.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllUsers;
