import React from 'react';
import axios from 'axios';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: {},
      allUsers: [],
      selectedUser: {}
    };
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.selectUser = this.selectUser.bind(this);
    // this.editProfile = this.editProfile.bind(this);
  }

  // Move this to AllUsers component?
  componentDidMount() {
    axios.get('/api/users')
    .then(res => res.data)
    .then(users => this.setState({ allUsers: users }))
    .catch(err => console.log(err));
  }

  signup(email, password, name, picture, description) {
    axios.post('/api/auth/local/signup', { email, password, name, picture, description })
    .then(res => res.data)
    .then(user => this.setState({ loggedInUser: user }))
    .catch(err => console.log(err));
  }

  login(email, password) {
    axios.post('/api/auth/local/login', { email, password })
    .then(res => res.data)
    .then(user => this.setState({ loggedInUser: user }))
    .catch(err => console.log(err));
  }

  // Fires when a single user's page is viewed
  selectUser(userName) {
    axios.get(`/api/users/${userName}`)
    .then(res => res.data)
    .then(user => this.setState({ selectedUser: user }))
    .catch(err => console.log(err));
  }

  render() {
    const props = Object.assign({}, this.state, {
      signup: this.signup,
      login: this.login,
      selectUser: this.selectUser
    });

    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, props)}
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: React.PropTypes.node
};

AppContainer.defaultProps = {
  children: null
};

export default AppContainer;
