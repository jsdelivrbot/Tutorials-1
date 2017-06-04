//For iOS

//Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);
//Render it to device

//Tells react native that we are about to render an application called albums.
//{ass a function that returns first component to render in our application, which is App component
AppRegistry.registerComponent('albums', () => App);
