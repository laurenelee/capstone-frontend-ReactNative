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
      agencies: props.agencies
    }
  }  // state = { agencies: [] }; // step 1: initial state default created (empty list of agencies)

  // must have render method that returns some  amount of JSX (to make class based component)
  // lifecyle methods that automatically get called
  componentWillReceiveProps() {
    this.setState({ agencies: this.props.agencies })
  };

  // componentWillMount() {
  //   // console.log('component will mount in agency list');
  //   axios.get('http://localhost:3000/agency_details')
  //   .then(response => this.setState({ agencies: response.data })); // step 2: updating component state and rerendering with new data (never do this.state = something for modification)
  // }

  // helper method to create list
  renderAgencies() {
    if (this.state.agencies.length == 0)
      {return <Text>'no agencies'</Text>}
    else
      {return this.state.agencies.map(agency =>
        <AgencyDetail key={agency.id} agency={agency} />
    );}
  }

  onButtonPress() {
    this.props.returnToForm()
  }

  render() {

    console.log(this.state); // rendering twice (once empty and then full)
    // now time to build a list of components! transform for each agency a component
    //  must use .map method
    // </ScrollView>

    return (
      <View>
        <ScrollView>
        <Button onPress={this.onButtonPress.bind(this)}>
        Find More Opportunities!
        </Button>
        <AgencyCards list={ this.state.agencies }/>
        </ScrollView>
      </View>
    );
  }
}

export default AgencyList;
