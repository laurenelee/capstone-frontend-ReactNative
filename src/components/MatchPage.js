import React, { Component }  from 'react';
import { Text, View } from 'react-native';
import AgencyCards from './AgencyCards';
import CardSection from './CardSection';
import IndividualCard from './IndividualCard';

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
      <IndividualCard>
        <CardSection>
          <View>
            <Text>You matched with {this.state.card.name}!</Text>
          </View>
        </CardSection>
      </IndividualCard>
    )
  }
};

export default MatchPage;
