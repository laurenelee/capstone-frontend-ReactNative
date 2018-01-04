import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// const AgencyList = () => {  (commented out 1/4/18 when learning class components as opposed to functional component)
class AgencyList extends Component {
  // must have render method that returns some  amount of JSX (to make class based component)
  // lifecyle methods that automatically get called
  componentWillMount() {
    // console.log('component will mount in agency list');
    axios.get('http://localhost:3000/agency_details')
    .then(response => console.log(response));
  }
  render() {
    return (
      <View>
      <Text>Agency List!! </Text>
      </View>
    );
  }
}

export default AgencyList;
