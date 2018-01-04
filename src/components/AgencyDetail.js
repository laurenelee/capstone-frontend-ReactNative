import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AgencyDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.agency.name}</Text>
      </CardSection>
    </Card>
  );
};

export default AgencyDetail;
