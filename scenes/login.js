import React, { Component, PropTypes } from 'react';
import { Image, NativeModules, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Button, Container, Content, Fab,
  Icon, Input, InputGroup, InputList,
  List, ListItem, Text, Thumbnail
} from 'native-base';

import { login, googleLogin, checkToken, facebookLogin, twitterLogin } from '../services/Auth';

import { Actions } from 'react-native-router-flux';


class Login extends Component {
  static propTypes = {
    routes: PropTypes.object
  };

  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    }
  }

  componentWillMount(){
    checkToken()
  }

  handleOnChange = (value, field) => {
    this.setState({[field]: value})
  }

  loginWithState = () => {
    const { email, password } = this.state
    login(email,password)
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
              <ListItem>
                <InputGroup>
                  <Icon name="ios-person" style={colorStyle} />
                  <Input
                    onChangeText={(value) => this.handleOnChange(value, "email")} 
                    placeholder="Email" 
                    style={colorStyle} />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Icon name="ios-unlock" style={colorStyle} />
                  <Input 
                    onChangeText={(value) => this.handleOnChange(value, "password")} 
                    placeholder="Password" 
                    secureTextEntry 
                    style={colorStyle} />
                </InputGroup>
              </ListItem>
              <ListItem style={{ borderColor: '#666', marginLeft: 0 }}>
                <View style={{
                  flex: 1,
                  flexDirection: 'column'
                }}>
                  <Button
                    onPress={ this.loginWithState } 
                    style={{ ...formBtnStyle, marginTop: 10 }}>
                    Entrar
                  </Button>
                  <Button
                    onPress={ Actions.signup } 
                    style={{ ...formBtnStyle, marginTop: 10 }}>
                    Registrarse
                  </Button>
                </View>   
              </ListItem>
              <ListItem>
                <Button
                  onPress={googleLogin}
                  style={{ ...rrssBtnStyle, backgroundColor: '#dd4b39' }}>
                  <Icon name="logo-google" />
                </Button>
                <Button 
                  onPress={facebookLogin}
                  style={{ ...rrssBtnStyle, backgroundColor: '#3b5998' }}>
                  <Icon name="logo-facebook" />
                </Button>
                <Button
                  onPress={twitterLogin} 
                  style={{ ...rrssBtnStyle, backgroundColor: '#55acee' }}>
                  <Icon name="logo-twitter" />
                </Button>
              </ListItem>
            </List>
          </Content>
        </Container>
      </Image>
    );
  }
}

export default connect(({routes}) => ({routes}))(Login);

const colorStyle = { color: '#404040' },
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
