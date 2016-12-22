import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './App'

export default class Popolution extends Component {

  render() {
    return <App />
  }
}

AppRegistry.registerComponent('popolution', () => Popolution);
