// import libs
import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';


// make Component
// name it the same as file name
const Header = (props) => {
  const { textStyle, viewStyle, mainStyle, fontAwesome } = styles;

  return (
    <View style={mainStyle}>
    <FontAwesome style={fontAwesome}>
      {Icons.bars}
    </FontAwesome>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  mainStyle: {
    flexDirection: 'row',
    backgroundColor: '#EC174F',
    height: 60,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  fontAwesome: {
    fontSize: 30,
    color: '#007aff',
    paddingLeft: 10
  },
  viewStyle: {

  },
  textStyle: {
    color: 'rgb(255, 255, 255)',
    fontSize: 27,
    paddingLeft: 50
  }
};

// make component available to other parts of app
export default Header;
