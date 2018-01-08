import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AgencyDetail = ({ agency }) => {
  const { name, volunteer_type, description, age_minimum, photo_url, url, zip } = agency;
  const { imageStyle, headerContentStyle, bold } = styles;

  return (
    <Card>

    <CardSection>
      <View>
        <Image
          style={imageStyle}
          source= {{ uri: photo_url }}
        />
      </View>
      <View style={headerContentStyle}>
        <Text style={bold}>{name}</Text>
        <Text><B>Volunteer Type: </B> {volunteer_type}</Text>
        <Text><B>Description:</B> {description}</Text>
        <Text><B>Age Minimum:</B> {age_minimum}</Text>
        <Text><B>Zipcode:</B> {zip} </Text>
      </View>
    </CardSection>

    <CardSection>
      <Button onPress={() => Linking.openURL(url)}>
      Volunteer Here!
      </Button>
    </CardSection>

    </Card>
  );
};
// playing with styling in a different way
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
// const Big = (props) => <Text style={{
//   fontWeight: 'bold',
//   fontSize: 30
// }}>{props.children}</Text>

// styling from tutorial
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 370,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 30
  }
};

export default AgencyDetail;
