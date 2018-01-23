import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text>
      {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    marginRight: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#EC174F',
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
