import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Login from './src/Login';
import Main from './src/Main';

const RouterWithRedux = connect()(Router);
import reducers from './reducers';

// create store...
const middleware = [/* ...your middleware (i.e. thunk) */];

const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="login" component={Login} hideNavBar title='login' initial={true} />
            <Scene key="main" component={Main}  title='main' hideNavBar />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
