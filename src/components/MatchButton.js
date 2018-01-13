import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const MatchButton = ({ onPress, children }) => {
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
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    borderWidth: 1,
    borderColor: '#007aff',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    // marginLeft: 5,
    // marginRight: 5
  }
};

export default MatchButton;
