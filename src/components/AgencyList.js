import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import AgencyDetail from './AgencyDetail';
import Button from './Button';
import AgencyCards from './AgencyCards';

class AgencyList extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: AgencyList,
      agencies: props.agencies,
      matchMoment: props.matchMoment,
      card: props.card
    }
    this.returnToCards = this.returnToCards.bind(this);
    this.handleYup = this.handleYup.bind(this);
    this.handleNope = this.handleNope.bind(this);
    this.matchMoment = this.matchMoment.bind(this);
  }
  componentWillReceiveProps() {
    this.setState({ agencies: this.props.agencies })
  };
  onButtonPress() {
    this.props.returnToForm()
  }
  returnToCards() {
    this.setState({
      pageToshow: AgencyList
    })
  }
  handleYup(card) {
    console.log(`Yes for ${card.name}`)
    this.props.matchMoment(card)
  }
  handleNope(card) {
    console.log(`Nope for ${card.name}`)
  }
  matchMoment(card) {
    this.state.card = card
    this.setState({
      pageToshow: MatchPage
    })
  }
  render() {

    console.log(this.state);

    return (
      <View>
        <ScrollView>

          <Button onPress={this.onButtonPress.bind(this)}>
          Find More Opportunities!
          </Button>

          <AgencyCards
          returnToForm={this.returnToForm}
          returnToCards={this.returnToCards}
          matchMoment={this.state.matchMoment}
          handleNope={this.state.handleNope}
          handleYup={this.state.handleYup}
          list={this.state.agencies}/>

        </ScrollView>
      </View>
    );
  }
}

export default AgencyList;
