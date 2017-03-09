import React from 'react';

class SingleUser extends React.Component {
  componentDidMount() {
    const userName = this.props.routeParams.name;
    const selectUser = this.props.selectUser;
    selectUser(userName);
  }

  render() {
    const user = this.props.selectedUser;
    return (
      <div>
        <div className="page-header center-align">
          <h2>{user.name}</h2>
        </div>
        <div className="center-align">
          <img src={user.picture} alt={`${user.name} profile`} className="user-image" />
          <p className="user-description">{user.description}</p>
        </div>
      </div>
    );
  }
}

SingleUser.propTypes = {
  selectUser: React.PropTypes.func, // eslint-disable-line react/require-default-props
  routeParams: React.PropTypes.shape({ name: React.PropTypes.string }).isRequired,
  selectedUser: React.PropTypes.shape({
    name: React.PropTypes.string,
    picture: React.PropTypes.string,
    description: React.PropTypes.string
  })
};

SingleUser.defaultProps = {
  selectedUser: { name: '', picture: '', description: '' }
};

export default SingleUser;
