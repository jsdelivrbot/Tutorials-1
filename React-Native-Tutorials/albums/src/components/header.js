// Import library for making Component
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component
const Header = () => {
  const { textStyles, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyles}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },
  textStyles: {
    fontSize: 20
  }
};

//Make the component available to other parts of the app
export default Header;
