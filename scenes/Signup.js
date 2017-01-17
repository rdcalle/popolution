import React, { Component, PropTypes } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Button, Container, Content, Fab,
  Icon, Input, InputGroup, InputList,
  List, ListItem, Text, Thumbnail
} from 'native-base';
import { showError } from '../services/Alert';

import { signup } from '../services/Auth';

import { Actions } from 'react-native-router-flux';

class Login extends Component {
  static propTypes = {
    routes: PropTypes.object
  };

  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirm_password: ""
    }
  }

  handleOnChange = (value, field) => {
    this.setState({[field]: value})
  }

  signupWithState = () => {
    const { email, password, confirm_password } = this.state
    signup(email, password, confirm_password)
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
              <ListItem>
                <InputGroup>
                  <Icon name="ios-unlock" style={colorStyle} />
                  <Input
                    onChangeText={(value) => this.handleOnChange(value, "confirm_password")} 
                    placeholder="Confirm Password" 
                    secureTextEntry 
                    style={colorStyle} />
                </InputGroup>
              </ListItem>
              <ListItem style={{ borderColor: '#666', marginLeft: 0 }}>
                <Button
                  onPress={ this.signupWithState } 
                  style={{ ...formBtnStyle, marginTop: 10 }}>
                  Registrarse
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
