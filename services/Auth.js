import { doFetch, doGet } from './Api';
import { set, get } from '../services/AsyncStore';

import { NativeModules } from 'react-native';

import { showError } from './Alert';

import { config } from '../config/keys';

import OAuthManager from 'react-native-oauth';

const manager = new OAuthManager('popolution')
manager.configure(config);

const twitterUrl = 'https://api.twitter.com/1.1/account/settings.json';
const facebookUrl = `https://graph.facebook.com/v2.8/me?fields=id,email`;
const googleUrl = 'https://www.googleapis.com/plus/v1/people/me';

const doPostWithoutToken = (uri, params, body, headers) => 
	doFetch("POST", uri, params, body, headers)	

export const facebookLogin = () => {
	  manager.authorize('facebook')
  .then(resp => 
    manager.makeRequest('facebook', facebookUrl).then(resp => {
      console.log('Facebook -> ', resp.data);
    }))
  .catch(err => console.log(err));
}

export const googleLogin = () => {
  manager.authorize('google', {scopes: 'email'})
  .then(resp => 
    manager.makeRequest('google', googleUrl).then(resp => {
      console.log('Google -> ', resp.data);
    }))
  .catch(err => console.log('There was an error'));
}


export const twitterLogin = () => {
  manager.authorize('twitter', {scopes: 'email'})
  .then(resp => 
    manager.makeRequest('twitter', twitterUrl)
      .then(resp => {
        console.log('Twitter ->', resp.data);
      }))
  .catch(err => console.log(err));
}


export const login = (email, password) => {
    doPostWithoutToken("auth/login",{} ,{email: email, password: password}).then(
      (data) => set("popolution-token", data.token).then(
        () => console.log("done")//Actions.main({type: ActionConst.REPLACE})
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
        () => console.log("done")//Actions.main({type: ActionConst.REPLACE})
      )
    , (error) => showError("Usuario o password incorrectos")
    )
  }

export const checkToken = () => {
  	doGet("auth/token").then(
      (data) => set("popolution-token", data.token).then(
        () => console.log("done")//Actions.main({type: ActionConst.REPLACE})
      ),
      (error) => 
        console.log("usuario no autenticado")
    )}