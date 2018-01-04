import React from 'react';
import { View, Text } from 'react-native';

const AgencyDetail = (props) => {
  return (
    <View>
    <Text>{props.agency.name}</Text>
    </View>
  );
};

export default AgencyDetail;
