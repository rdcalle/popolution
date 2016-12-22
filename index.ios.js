import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppRouter from './router/AppRouter'

export default class Popolution extends Component {

  render() {
    return (
      <AppRouter />
    )
  }
}

AppRegistry.registerComponent('popolution', () => Popolution);
