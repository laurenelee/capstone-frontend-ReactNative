import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import axios from 'axios';
import AgencyDetail from './AgencyDetail';
import Button from './Button';
import AgencyCards from './AgencyCards';
import Header from './header';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import MatchButton from './MatchButton';



class AgencyList extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: AgencyList,
      agencies: props.agencies,
      card: props.card,
      maybeMatches: props.maybeMatches
    }
  }
  componentWillReceiveProps() {
    this.setState({
      agencies: this.props.agencies,
      maybeMatches: this.props.maybeMatches
    })
  };
  onButtonPress() {
    this.props.returnToForm()
  }
  onSeeMatches() {
    if (this.props.card == "") {
      return Alert.alert('No matches yet!', 'Swipe Up or Right to save an agency',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'OK', onPress: () => this.setState({pageToshow: AgencyList})},
      ],
      {cancelable: false}
    )} else {
      this.props.showMatchList()
    }
  }
  render() {
    console.log(this.state);
    return (
      <View>
        <Header headerText={'Swipe Opportunities'} />
        <View >
            <View style={{flexDirection: 'row'}}>
              <MatchButton onPress={this.onButtonPress.bind(this)}>
              New Search
              </MatchButton>
              <MatchButton onPress={this.onSeeMatches.bind(this)}>
              See all Matches
              </MatchButton>
            </View>

          <View style={{height: 500, paddingTop: 10}}>
            <AgencyCards
            returnToForm={this.props.returnToForm}
            returnToCards={this.props.returnToCards}
            matchMoment={this.props.matchMoment}
            handleNope={this.props.handleNope}
            handleYup={this.props.handleYup}
            handleMaybe={this.props.handleMaybe}
            showMatchList={this.props.showMatchList}
            maybeMatches={this.state.maybeMatches}
            list={this.state.agencies}/>
          </View>
        </View>
      </View>
    );
  }
}

export default AgencyList;
