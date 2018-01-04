import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AgencyDetail = ({ agency }) => {
  const { name, volunteer_type } = agency;
  const thumbnail_image = 'http://lorempixel.com/50/50/people/'

  return (
    <Card>
    <CardSection>
    <View>
    <Image
    style={styles.imageStyle}
    source= {{ uri: 'https://lorempixel.com/50/50/business/'}}
    />
    </View>
    <View style={styles.headerContentStyle}>
    <Text>{name}</Text>
    <Text>Volunteer Type: {volunteer_type}</Text>
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
    height: 50,
    width: 50
  }
};

export default AgencyDetail;
