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
    paddingRight: 3
  }
};

export default Button;
