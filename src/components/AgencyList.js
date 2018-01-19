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

  render() {
    console.log(this.state);
    return (
      <View>
        <Header headerText={'Swipe Opportunities'} />
        <View style={{paddingTop: 5}}>
            <Button onPress={this.onButtonPress.bind(this)}>
            New Search
            </Button>
          <View style={{height: 450, paddingTop: 20}}>
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
