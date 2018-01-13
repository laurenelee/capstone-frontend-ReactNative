import React, { Component }  from 'react';
import { Text, View, Linking } from 'react-native';
import AgencyCards from './AgencyCards';
import CardSection from './CardSection';
import IndividualCard from './IndividualCard';
import MatchButton from './MatchButton';
import AgencyList from './AgencyList';

class MatchPage extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: MatchPage,
      card: props.card
    }
    console.log('foo', this.props);
  }

  render() {
    return (
        <View>

          <IndividualCard>
            <CardSection>
              <View>
                <Text>You matched with {this.state.card.name}!</Text>
              </View>
            </CardSection>
          </IndividualCard>
          <View style={{flexDirection: 'row'}}> 
            <MatchButton onPress={console.log('button pressed- now what?')}>
            Back to vollunteer opportunities!
            </MatchButton>

            <MatchButton onPress={() => Linking.openURL(this.state.card.url)}>
            Sign up Now!
            </MatchButton>
          </View>
        </View>
    )
  }
};

export default MatchPage;
