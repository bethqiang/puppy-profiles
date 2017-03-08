import React from 'react';
import axios from 'axios';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      allUsers: {}
    };
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    // this.editProfile = this.editProfile.bind(this);
  }

  signup(email, password, name, picture, description) {
    axios.post('/api/auth/local/signup', { email, password, name, picture, description })
    .then(res => res.data)
    .then(user => {
      this.setState({ currentUser: user });
    });
  }

  login(email, password) {
    axios.post('/api/auth/local/login', { email, password })
    .then(res => res.data)
    .then(user => {
      this.setState({ currentUser: user });
    });
  }

  render() {
    const props = Object.assign({}, this.state, {
      signup: this.signup,
      login: this.login
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
