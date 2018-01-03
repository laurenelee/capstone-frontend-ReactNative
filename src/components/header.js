// import libs
import React from 'react';
import { Text, View } from 'react-native';

// make Component
// name it the same as file name
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}> Volunteer Agencies </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgb(145, 196, 203)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};

// make component available to other parts of app
export default Header;