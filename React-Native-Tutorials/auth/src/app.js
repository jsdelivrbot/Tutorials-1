import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'; //we don't need to specific index because its default
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDnZZYNN5O3Svg-jK6emMp1iTyl0tqtDMM",
      authDomain: "authentication-c0ed7.firebaseapp.com",
      databaseURL: "https://authentication-c0ed7.firebaseio.com",
      projectId: "authentication-c0ed7",
      storageBucket: "authentication-c0ed7.appspot.com",
      messagingSenderId: "634031631611"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}


export default App;
