import React from 'react';
import Navbar from './navbar-component'

import { Router, Route, hashHistory } from 'react-router'

const AppComponent = function(props) {

  return (
    <div>
        <Navbar />
          {props.children}
    </div>
  )
}

export default AppComponent
