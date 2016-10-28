'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './react-routes'
import store from './ducks/index'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
