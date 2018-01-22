import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
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
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EC174F',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 4,
    backgroundColor: '#f097ae',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3},
  }
};

export default Button;
