import React from 'react';
import {
  Router,
  Route,
  IndexRedirect,
  hashHistory
} from 'react-router';

import AppComponent from './react/app-component'
import MainContainer from './react/main-container'
import { onAppEnter } from './onenter-hooks'

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent} onEnter={onAppEnter}>
      <IndexRedirect to="main" />
      <Route path="main" component={MainContainer} />
    </Route>
  </Router>
);
