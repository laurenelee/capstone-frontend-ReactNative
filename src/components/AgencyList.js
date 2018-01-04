import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AgencyDetail from './AgencyDetail';

// const AgencyList = () => {  (commented out 1/4/18 when learning class components as opposed to functional component)
class AgencyList extends Component {
  state = { agencies: [] }; // step 1: initial state default created (empty list of agencies)

  // must have render method that returns some  amount of JSX (to make class based component)
  // lifecyle methods that automatically get called
  componentWillMount() {
    // console.log('component will mount in agency list');
    axios.get('http://localhost:3000/agency_details')
    .then(response => this.setState({ agencies: response.data })); // step 2: updating component state and rerendering with new data (never do this.state = something for modification)
  }

  // helper method to create list
  renderAgencies() {
    return this.state.agencies.map(agency =>
      <AgencyDetail key={agency.id} agency={agency} />
    );
  }


  render() {
    console.log(this.state); // rendering twice (once empty and then full)
    // now time to build a list of components! transform for each agency a component
    //  must use .map method
    return (
      <View>
      {this.renderAgencies()}
      </View>
    );
  }
}

export default AgencyList;
