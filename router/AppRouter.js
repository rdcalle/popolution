import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from '../scenes/login'
import Search from '../scenes/Search';
import PageTwo from '../scenes/PageTwo';

export default class AppRouter extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar initial={true} />
          <Scene key="search" component={Search} hideNavBar />
          <Scene key="pageTwo" component={PageTwo} hideNavBar />
        </Scene>
      </Router>
    )
  }
}
