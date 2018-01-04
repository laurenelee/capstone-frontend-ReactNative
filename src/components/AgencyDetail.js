import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AgencyDetail = (props) => {
  return (
    <Card>
    <Text>{props.agency.name}</Text>
    </Card>
  );
};

export default AgencyDetail;
