import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { AppRegistry } from 'react-native';

import Login from './scenes/login'
import Search from './scenes/Search';
import PageTwo from './scenes/PageTwo';

export default class Popolution extends Component {
  componentDidMount() {
    console.info('Cargué la app para Android');
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="search" component={Search} title="Search" />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('popolution', () => Popolution);
