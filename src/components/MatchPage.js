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
  onButtonPress() {
    this.props.returnToCards()
  }

  render() {
    const { matchCard, textStyle } = styles;

    return (
        <View>

          <IndividualCard>
            <CardSection>
              <View style={matchCard}>
                <Text style={textStyle}>You matched with {this.state.card.name}!</Text>
              </View>
            </CardSection>
          </IndividualCard>


          <View style={{flexDirection: 'row'}}>
            <MatchButton
            onPress={this.onButtonPress.bind(this)}> Back to volunteer opportunities!
            </MatchButton>

            <MatchButton onPress={() => Linking.openURL(this.state.card.url)}>
            Sign up Now!
            </MatchButton>
          </View>
        </View>
    )
  }
};

const styles = {
  matchCard: {
    height: 300,
    paddingTop: 50,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '800',
    color: '#007aff',
  }
};

export default MatchPage;
