import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Login from './scenes/login'
import Search from './scenes/Search';
import PageTwo from './scenes/PageTwo';

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
            <Scene key="search" component={Search} hideNavBar />
            <Scene key="pageTwo" component={PageTwo} hideNavBar />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
