import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SplashPageButton = ({ onPress, children }) => {
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
    backgroundColor: '#f097ae',
    borderWidth: 1,
    borderColor: '#EC174F',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  }
};

export default SplashPageButton;
