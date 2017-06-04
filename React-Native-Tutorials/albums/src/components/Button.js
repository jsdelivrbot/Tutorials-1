import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyle, textStyles } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyles}>Click Me!!!</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyles: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
