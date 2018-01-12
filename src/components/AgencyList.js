import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import AgencyDetail from './AgencyDetail';
import Button from './Button';
import AgencyCards from './AgencyCards';

// const AgencyList = () => {  (commented out 1/4/18 when learning class components as opposed to functional component)
class AgencyList extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      agencies: props.agencies,
      matchMoment: props.matchMoment
    }
    console.log('bar', this.state.matchMoment);

  }
  componentWillReceiveProps() {
    this.setState({ agencies: this.props.agencies })
  };

  // renderAgencies() {
  //   if (this.state.agencies.length == 0)
  //     {return <Text>'no agencies'</Text>}
  //   else
  //     {return this.state.agencies.map(agency =>
  //       <AgencyDetail key={agency.id} agency={agency} />
  //   );}
  // }

  onButtonPress() {
    this.props.returnToForm()
  }

  render() {

    console.log(this.state);

    return (
      <View>
        <ScrollView>

          <Button onPress={this.onButtonPress.bind(this)}>
          Find More Opportunities!
          </Button>

          <AgencyCards             matchMoment={this.state.matchMoment}
          list={ this.state.agencies }/>

        </ScrollView>
      </View>
    );
  }
}

export default AgencyList;
