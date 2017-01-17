import { doFetch, doGet } from './Api';
import { set, get } from '../services/AsyncStore';

import { NativeModules } from 'react-native';

import { Actions, ActionConst } from 'react-native-router-flux';

import { showError } from './Alert';

import { config } from '../config/keys';

import OAuthManager from 'react-native-oauth';

const manager = new OAuthManager('popolution')
manager.configure(config);

const doPostWithoutToken = (uri, params, body, headers) => 
	doFetch("POST", uri, params, body, headers)	

export const facebookLogin = () => {
	  manager.authorize('facebook')
  .then(resp => Actions.main({type: ActionConst.REPLACE}))
  .catch(err => console.log(err));
}

export const googleLogin = () => {
  manager.authorize('google', {scopes: 'email'})
  .then(resp => Actions.main({type: ActionConst.REPLACE}))
  .catch(err => console.log('There was an error'));
}


export const twitterLogin = () => {
  manager.authorize('twitter')
  .then(resp => Actions.main({type: ActionConst.REPLACE}))
  .catch(err => console.log(err));
}


export const login = (email, password) => {
    doPostWithoutToken("auth/login",{} ,{email: email, password: password}).then(
      (data) => set("popolution-token", data.token).then(
        () => Actions.main()
      )
    , (error) => showError("Usuario o password incorrectos")
    )
  }

export const signup = (email, password, confirm_password) => {
    if (password != confirm_password) {
      showError("La contraseña y su confirmación dében coincidir")
      return
    }  

    doPostWithoutToken("auth/signup",{} ,{email: email, password: password}).then(
      (data) => set("popolution-token", data.token).then(
        () => Actions.main()
      )
    , (error) => showError("Usuario o password incorrectos")
    )
  }

export const checkToken = () => {
  	doGet("auth/token").then(
      (data) => set("popolution-token", data.token).then(
        () => Actions.main()
      ),
      (error) => 
        console.log("usuario no autenticado")
    )}