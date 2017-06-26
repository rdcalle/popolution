import React, { Component } from 'react';
import { Linking } from 'react-native';
import { connect, Provider } from 'react-redux';
//import { createStore, applyMiddleware, compose } from 'redux';

import Login from './src/Login';
import Main from './src/Main';

//const RouterWithRedux = connect()(Router);
//import reducers from './reducers';

// create store...
//onst middleware = [/* ...your middleware (i.e. thunk) */];

// const store = compose(
//   applyMiddleware(...middleware)
// )(createStore)(reducers);

class App extends Component {
  render () {
    return (
//      <Provider store={store}>
        <Login />
//      </ Provider>
    );
  }
}

export default App;
