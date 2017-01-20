import React, { Component, PropTypes } from 'react';
import { Image, View, Animated } from 'react-native';
import { connect } from 'react-redux';

import {
  Button, Container, Content, Fab,
  Icon, Input, InputGroup, InputList,
  List, ListItem, Text, Thumbnail
} from 'native-base';

import { login, signup, googleLogin, checkToken, facebookLogin, twitterLogin } from '../../services/Auth';

const initState = {
        signupView: false,
        email: "",
        password: "",
        confirm_password: "",
        maxHeightAnimationInput: new Animated.Value(0),
        maxHeightAnimationButtons: new Animated.Value(100)
      }

class LoginView extends Component {
  static propTypes = {
    routes: PropTypes.object
  };

  constructor() {
    super();

    this.state = initState
  }

  componentWillMount(){
    checkToken()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.signupView !== this.state.signupView){
      Animated.parallel([          // after decay, in parallel:
        Animated.timing(  
          this.state.maxHeightAnimationInput,                 
          {
            toValue: this.state.signupView ? 40 : 0,
            duration: this.state.signupView ? 500 : 400,
          }
        ),
        Animated.timing(  
          this.state.maxHeightAnimationButtons,                 
          {
            toValue: !this.state.signupView ? 70 : 0,
            duration: this.state.signupView ? 285 : 228,
          }
        )
      ]).start(); 
    }
  }

  changeView = () => {
    this.setState({signupView: !this.state.signupView})
  }

  handleOnChange = (value, field) => {
    this.setState({[field]: value})
  }
  
  signupWithState = () => {
    const { email, password, confirm_password } = this.state
    signup(email, password, confirm_password)
  }

  loginWithState = () => {
    const { email, password } = this.state
    login(email,password)
  }

  render() {
    const { signupView, maxHeightAnimationInput, maxHeightAnimationButtons } = this.state

    return (
      <Image
        style={imageStyle}
        source={require('../../img/givemefive.jpg')}
      >
        <Container>
          <Content>
            <Thumbnail square
              size={200}
              source={require('../../img/logo.png')}
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
                    placeholder="Contraseña" 
                    secureTextEntry 
                    style={colorStyle} />
                </InputGroup>
              </ListItem>
              <Animated.View style={{ overflow: 'hidden',
                                      maxHeight: maxHeightAnimationInput}}>
                <ListItem>
                  <InputGroup>
                    <Icon name="ios-unlock" style={colorStyle} />
                    <Input
                      onChangeText={(value) => this.handleOnChange(value, "confirm_password")} 
                      placeholder="Confirmar contraseña" 
                      secureTextEntry 
                      style={colorStyle} />
                  </InputGroup>
                </ListItem>
              </Animated.View>  
              <ListItem style={{ borderColor: '#666', marginLeft: 0 }}>
                <View style={{
                  flex: 1,
                  flexDirection: 'column'
                }}>
                  <Button
                    onPress={ this.signupWithState } 
                    style={{ ...formBtnStyle, marginTop: 10 }}>
                    Entrar
                  </Button>
                  <Button
                    onPress={ this.changeView } 
                    style={{ ...formBtnStyle, marginTop: 10 }}>
                    {(signupView) ? "Atras" : "Registrarse"}
                  </Button>
                </View>  
              </ListItem>
              <Animated.View style={{ overflow: 'hidden',
                                      maxHeight: maxHeightAnimationButtons}}>
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
              </Animated.View>   
            </List>
          </Content>
        </Container>  
      </Image>
    );
  }
}

export default connect(({routes}) => ({routes}))(LoginView);

const imageStyle = {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        padding: 20,
      },
      colorStyle = { color: '#404040' },
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
