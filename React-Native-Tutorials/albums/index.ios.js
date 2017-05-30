//For iOS

//Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


//Create Component
const App = () => (
  <Header />
);
//Render it to device

//Tells react native that we are about to render an application called albums.
//{ass a function that returns first component to render in our application, which is App component
AppRegistry.registerComponent('albums', () => App);
