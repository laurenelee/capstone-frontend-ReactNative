import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './header';
import Button from './Button';
import IndividualCard from './IndividualCard';
import CardSection from './CardSection';

class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: MatchList,
      card: props.card,
      maybeMatches: props.maybeMatches
      // cards: props.agencies,
    }
    console.log(this.state);
  }
  onButtonPress() {
    this.props.returnToCards()
  }

  render() {
    return (
      <IndividualCard>

        <CardSection>
            <Text> Your Matches: </Text>
            <Text> {this.state.card.name} </Text>
            <Text> Your Maybes: </Text>
            <Text> {this.state.card.name} </Text>
        </CardSection>

        <CardSection>
          <Button
          onPress={this.onButtonPress.bind(this)}> Keep swiping!
          </Button>
        </CardSection>

      </IndividualCard>
    )
  }
}


export default MatchList;
