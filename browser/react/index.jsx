/* global document */

import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { render } from 'react-dom';

import AppContainer from './containers/AppContainer';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer';
import AllUsers from './components/AllUsers';
import SingleUser from './components/SingleUser';
import EditProfileContainer from './containers/EditProfileContainer';

render(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/users" />
      <Route path="signup" component={SignupContainer} />
      <Route path="login" component={LoginContainer} />
      <Route path="users" component={AllUsers} />
      <Route path="users/:name" component={SingleUser} />
      <Route path="users/me/edit" component={EditProfileContainer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
