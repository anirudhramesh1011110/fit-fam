import React from 'react';
import { connect } from 'react-redux';
import { login } from '../state/actions/UserAction';

import {
    Image,
    StyleSheet,
    View,
    Text,
    Input,
    TextInput,
    Button
} from 'react-native';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedIn: '',
      username: '',
      password: ''
    };
  }

  _login(e) {
    e.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
    this.props.user(this.state.username);

  }


  render() {
    return (

      
      <View style={styles.container}>
          <TextInput
            style={styles.usernameInput}
            underlineColorAndroid={'gray'}
            onChangeText={(text) => this.setState({username: text})}
            placeholder={'User ID'}
            autoCapitalize = 'none' />

          <TextInput
            style={styles.passwordInput}
            underlineColorAndroid={'gray'}
            onChangeText={(text) => this.setState({password: text})}
            placeholder={'Password'}
            autoCapitalize = 'none' />

          <Button
            secureTextEntry={true}
            style={styles.submitButton}
            onPress={(e) => this._login(e)}
            title="Submit" />

      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.user.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogin: (username, password) => { dispatch(login(username, password)); },
      onSignUp: (username, password) => { dispatch(signup(username, password)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgba(55, 55, 55, 0.7)',
    marginLeft: '15%',
    marginRight: '15%',
    marginTop: '80%'
  },
  usernameInput: {
    height: 60,
    color: 'white',
    paddingLeft: '3%',
    color: 'white',
    backgroundColor: 'rgba(229,229,229,0.2)',
    
    
  },
  passwordInput: {
    height: 60, 
    marginTop: '5%',
    marginBottom: '8%',
    color: 'white',
    paddingLeft: '3%',
    backgroundColor: 'rgba(229,229,229,0.2)'
  },
  submitButton: {
    margin: '10%'
  }
});

