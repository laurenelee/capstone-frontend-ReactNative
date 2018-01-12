import React, { Component }  from 'react';
import { Text } from 'react-native';
import AgencyCards from './AgencyCards';

class MatchPage extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: MatchPage,
      card: props.card
    }
  }
  render() {
    return (
      <Text>You Matched!</Text>
    )
  }
};

export default MatchPage;
