import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Expo from 'expo';
import { 
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Router from './navigation/Router';
import store from './state/Store';
import AuthScreen from './screens/AuthScreen.js';
import HomeScreen from './screens/HomeScreen.js';

export default class App extends React.Component {

  render() {    

    return (
      <Provider store={store}>
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('auth')} />
        </NavigationProvider>
      </Provider>
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
});
