import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const IconButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
      {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch', //we want element to position itself to stretch
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#fff',
    width: 100,
    borderWidth: 1,
    borderColor: '#007aff'
  }
};

export default IconButton;
