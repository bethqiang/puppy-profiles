/* global document */

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';

import AppContainer from './containers/AppContainer';
import SignupContainer from './containers/SignupContainer';

render(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="signup" component={SignupContainer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
