import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './header';
import Button from './Button';

class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: MatchList,
      card: props.card
    }
    console.log(this.state);
  }

  render() {
    return (
      <View>

      <Text style={{paddingTop: 30}}> {this.state.card.name} </Text>

      </View>
    )
  }
}


export default MatchList;
