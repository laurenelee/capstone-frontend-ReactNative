import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
<View style={styles.containerStyle}>
{props.children}
</View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center', //was flex-start
    flexDirection: 'column', // was row
    alignItems: 'center', // this finally centered the image! 1/5/18
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
