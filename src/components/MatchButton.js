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
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    width: 150,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3},
    borderWidth: 1,
    borderColor: '#EC174F',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: '#f097ae',
    // marginLeft: 5,
    // marginRight: 5
  }
};

export default MatchButton;
