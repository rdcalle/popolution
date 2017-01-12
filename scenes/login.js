import React, { Component, PropTypes } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import {
  Button, Container, Content, Fab, H3,
  Icon, Input, InputGroup, InputList,
  List, ListItem, Text, Thumbnail
} from 'native-base';

import { LoginManager } from 'react-native-fbsdk';

import { doPost } from '../services/Api';
import { set, get } from '../services/AsyncStore';
import { showError } from '../services/Alert';

import { Actions } from 'react-native-router-flux';

class Login extends Component {
  static propTypes = {
    routes: PropTypes.object
  };

  constructor() {
    super();
  }

  facebookLogin(){
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function(result) {
        if (result.isCancelled) {
          showError('Login was cancelled');
        } else {
          showError('Login was successful with permissions: '
            + result.toString());
        }
      },
      function(error) {
        showError('Login failed with error: ' + error);
      }
    );
  }


  login(){
    doPost("auth/login",{} ,{email: "prueba", password: "prueba"}).then(
      (data) => set("popolution", data.token).then(
        () => Actions.main()
      )
    , (error) => showError("Usuario o password incorrectos")
    )
  }

  render() {
    return (
      <Image
        style={imageStyle}
        source={require('../img/givemefive.jpg')}
      >
        <Container>
          <Content>
            <Thumbnail square
              size={200}
              source={require('../img/logo.png')}
              style={logoStyle}
            />
            <List style={formStyle}>
              <H3 style={h3FormStyle}>
                Login
              </H3>
              <ListItem>
                <InputGroup>
                  <Icon name="ios-person" style={colorStyle} />
                  <Input placeholder="Email" style={colorStyle} />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Icon name="ios-unlock" style={colorStyle} />
                  <Input placeholder="Password" secureTextEntry style={colorStyle} />
                </InputGroup>
              </ListItem>
              <ListItem style={{ borderColor: '#666', marginLeft: 0 }}>
                <Button
                  onPress={ this.login } 
                  style={{ ...formBtnStyle, marginTop: 10 }}>
                  Entrar
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  style={{ ...rrssBtnStyle, backgroundColor: '#dd4b39' }}>
                  <Icon name="logo-google" />
                </Button>
                <Button 
                  onPress={this.facebookLogin}
                  style={{ ...rrssBtnStyle, backgroundColor: '#3b5998' }}>
                  <Icon name="logo-facebook" />
                </Button>
                <Button style={{ ...rrssBtnStyle, backgroundColor: '#55acee' }}>
                  <Icon name="logo-twitter" />
                </Button>
              </ListItem>
            </List>
            <Text onPress={Actions.search}>The current scene is titled {this.props.routes.scene.title}.</Text>
          </Content>
        </Container>
      </Image>
    );
  }
}

export default connect(({routes}) => ({routes}))(Login);

const colorStyle = { color: '#404040' },
      h3FormStyle = {
        ...colorStyle,
        alignSelf: 'center',
        height: 30,
        marginTop: 5
      },
      formStyle = {
        backgroundColor: 'rgba(255, 255, 255 , .3)',
        margin: 10,
      }
      imageStyle = {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        padding: 20,
      },
      logoStyle = {
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255 , .1)',
        margin: 10,
      },
      rrssBtnStyle = {
        flex: 1,
        margin: 5
      },
      formBtnStyle = {
        alignSelf: 'auto',
        backgroundColor: '#acbee4',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 25,
        marginRight: 25
      }
