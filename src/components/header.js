// import libs
import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ButtonIcon from './ButtonIcon';



// make Component
// name it the same as file name
const Header = (props) => {
  const { textStyle, mainStyle, fontAwesome } = styles;

  return (

    <View style={mainStyle}>
      <ButtonIcon onPress={console.log('pressing button')}>
        <FontAwesome style={fontAwesome}>
          {props.fontAwesome}
        </FontAwesome>
      </ButtonIcon>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  mainStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    paddingRight: 20,
  },

  textStyle: {
    color: 'rgb(255, 255, 255)',
    fontSize: 27,
    paddingRight: 20,

  }
};

// make component available to other parts of app
export default Header;
