import React from 'react';

import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Router from '../navigation/Router';
import LoginForm from '../components/LoginForm';
import store from '../state/Store';

export default class AuthScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: ''
    };
  }

  // Current user - get current user from LoginForm.

  _getCurrentUser(username) {
    this.setState({currentUser: username});
    console.log('Welcome user: ' + this.state.currentUser);
    this.props.navigator.push(Router.getRoute('home'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/login_background.jpg')} style={styles.loginBackground}>
          <LoginForm user={this._getCurrentUser.bind(this)} />
        </Image>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBackground: {
    width: '100%',
    height: '100%'
  }
});

