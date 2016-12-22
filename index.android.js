import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppRouter from './router/AppRouter'

export default class Popolution extends Component {

  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('popolution', () => Popolution);
