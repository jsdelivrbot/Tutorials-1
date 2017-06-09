import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyD0FyHoMCvbm1GuIfdc9xK2xTvD82Lb9Pg",
      authDomain: "manager-d0961.firebaseapp.com",
      databaseURL: "https://manager-d0961.firebaseio.com",
      projectId: "manager-d0961",
      storageBucket: "manager-d0961.appspot.com",
      messagingSenderId: "597155229706"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
