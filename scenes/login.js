import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Button, Container, Content, Fab, H3,
  Icon, Input, InputGroup, InputList,
  List, ListItem, Text, Thumbnail
} from 'native-base';

export default class Login extends Component {
  constructor() {
    super();
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
                <Button style={{ ...formBtnStyle, marginTop: 10 }}>
                  Entrar
                </Button>
              </ListItem>
              <ListItem>
                <Button style={{ ...rrssBtnStyle, backgroundColor: '#dd4b39' }}>
                  <Icon name="logo-google" />
                </Button>
                <Button style={{ ...rrssBtnStyle, backgroundColor: '#3b5998' }}>
                  <Icon name="logo-facebook" />
                </Button>
                <Button style={{ ...rrssBtnStyle, backgroundColor: '#55acee' }}>
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
