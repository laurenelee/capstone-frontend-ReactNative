import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AgencyDetail from './AgencyDetail';
import Button from './Button';
import AgencyCards from './AgencyCards';
import Header from './header';

class AgencyList extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: AgencyList,
      agencies: props.agencies,
      // matchMoment: props.matchMoment,
      card: props.card
    }
    // this.returnToCards = this.returnToCards.bind(this);
    // this.handleYup = this.handleYup.bind(this);
    // this.matchMoment = this.matchMoment.bind(this);
  }
  componentWillReceiveProps() {
    this.setState({ agencies: this.props.agencies })
  };
  onButtonPress() {
    this.props.returnToForm()
  }
  // returnToCards() {
  //   this.setState({
  //     pageToshow: AgencyList
  //   })
  // }
  // handleYup(card) {
  //   console.log(`Yes for ${card.name}`)
  //   this.props.matchMoment(card)
  // }
  // matchMoment(card) {
  //   this.state.card = card
  //   this.setState({
  //     pageToshow: MatchPage
  //   })
  // }
  render() {

    console.log(this.state);

    return (
      <View>
        <Header headerText={'Swipe Opportunities'} />
        <View style={{paddingTop: 5}}>
            <Button onPress={this.onButtonPress.bind(this)}>
            New Search
            </Button>
          <View style={{height: 450}}>
            <AgencyCards
            returnToForm={this.props.returnToForm}
            returnToCards={this.props.returnToCards}
            matchMoment={this.props.matchMoment}
            handleNope={this.props.handleNope}
            handleYup={this.props.handleYup}
            handleMaybe={this.props.handleMaybe}
            list={this.state.agencies}/>
          </View>
        </View>
      </View>
    );
  }
}

export default AgencyList;
