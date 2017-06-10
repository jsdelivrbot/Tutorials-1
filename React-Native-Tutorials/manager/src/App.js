import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    //the second argument to createStore is any initial state we want to pass to our redux application
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
