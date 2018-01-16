import React, { Component }  from 'react';
import { Text, View, Linking } from 'react-native';
import AgencyCards from './AgencyCards';
import CardSection from './CardSection';
import IndividualCard from './IndividualCard';
import MatchButton from './MatchButton';
import AgencyList from './AgencyList';
import Button from './Button';

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
  pressBackButton() {
    this.props.returnToForm()
  }

  render() {
    const { matchCard, textStyle, bottomButton } = styles;

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
            onPress={this.onButtonPress.bind(this)}> Keep swiping!
            </MatchButton>

            <MatchButton
            onPress={this.pressBackButton.bind(this)}>
            New search
            </MatchButton>
          </View>

          <View style={{paddingTop: 5}} >
            <Button onPress={() => Linking.openURL(this.state.card.url)}>
            Sign up Now!
            </Button>
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
  },
  bottomButton: {
    // paddingTop: 5,
    color: '#030907',
    height: 100,
    fontSize: 50
  }
};

export default MatchPage;
