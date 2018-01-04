import React, { Component } from 'react';
import { View, Text } from 'react-native';

// const AgencyList = () => {  (commented out 1/4/18 when learning class components as opposed to functional component)
class AgencyList extends Component {
  // must have render method that returns some  amount of JSX (to make class based component)
  render() {
    return (
      <View>
      <Text>Agency List!! </Text>
      </View>
    );
  }
}

export default AgencyList;
