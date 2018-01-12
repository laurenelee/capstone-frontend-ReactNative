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
    // color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex: 1
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 3,
    marginLeft: 3,
    width: 100,
    height: 60,
    // borderWidth: 1,
    // borderColor: '#007aff'
  }
};

export default IconButton;
