import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const Tutorial = (props) => {
  const { textStyle, title } = styles;

  return (
    <View style={{backgroundColor: '#EC174F', paddingBottom: 100}}>

    <Text style={title}> How to use this app:</Text>
    <Text style={textStyle}>{`
    Swipe LEFT for no
    Swipe RIGHT for yes
    Swipe UP for maybe
    `}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontFamily: 'AmericanTypewriter-Bold',
    fontWeight: 'bold'
  }
}

export default Tutorial;
