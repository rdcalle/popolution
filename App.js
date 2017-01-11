import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Login from './scenes/Login'
import Search from './scenes/Search';
import Main from './scenes/Main';
import PageTwo from './scenes/PageTwo';

const RouterWithRedux = connect()(Router);
import reducers from './reducers';

// create store...
const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

class App extends Component {
  componentDidMount() {
    var url = Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="login" component={Login} hideNavBar title='login' initial={true} />
            <Scene key="main" component={Main} hideNavBar />
            <Scene key="search" component={Search} hideNavBar />
            <Scene key="pageTwo" component={PageTwo} hideNavBar />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
