import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AgencyDetail = ({ agency }) => {
  const { name, volunteer_type, description, age_minimum } = agency;
  const { imageStyle, headerContentStyle } = styles;

  return (
    <Card>
    <CardSection>
    <View>
    <Image
    style={imageStyle}
    source= {{ uri: 'https://lorempixel.com/300/400/cats/' }}
    />
    </View>
    <View style={headerContentStyle}>
    <Text><Big>{name}</Big></Text>
    <Text><B>Volunteer Type:</B>{volunteer_type}</Text>
    <Text><B>Description:</B> {description}</Text>
    <Text><B>Age Minimum:</B> {age_minimum}</Text>
    </View>
    </CardSection>
    </Card>
  );
};
// playing with styling in a different way
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
const Big = (props) => <Text style={{
  fontWeight: 'bold',
  fontSize: 30
}}>{props.children}</Text>

// styling from tutorial
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageStyle: {
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 400,
    // height: 80,
    // width: 80
  }
};

export default AgencyDetail;
