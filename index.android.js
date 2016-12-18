import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from './scenes/login'

export default class popolution extends Component {
  componentDidMount() {
    console.info('Cargué la app para Android');
  }

  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('popolution', () => popolution);
