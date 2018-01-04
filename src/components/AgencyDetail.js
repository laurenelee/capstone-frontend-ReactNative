import React from 'react';
import { Text, View, Image, Integer } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AgencyDetail = ({ agency }) => {
  const { name, volunteer_type, description, age_minimum } = agency;


  return (
    <Card>
    <CardSection>
    <View>
    <Image
    style={styles.imageStyle}
    source= {{ uri: 'https://lorempixel.com/50/50/business/' }}
    />
    </View>
    <View style={styles.headerContentStyle}>
    <Text>{name}</Text>
    <Text>Volunteer Type: {volunteer_type}</Text>
    <Text>Description: {description}</Text>
    <Text>Age Minimum: {age_minimum}</Text>
    </View>
    </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  imageStyle: {
    height: 80,
    width: 80
  }
};

export default AgencyDetail;
