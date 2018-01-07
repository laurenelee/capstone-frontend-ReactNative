import React, { Component } from 'react';
import { View } from 'react-native';
// import Header from './src/components/header';
import AgencyList from './AgencyList';
import UserForm from './UserForm';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state  = {
      agencies: []
    }
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(volunteer_type) {
    console.log('searching ');
    fetch(`http://localhost:3000/search?volunteer_type=${volunteer_type}`)

    .then(function(response) {
      return response.json()
      }).then((json) => {
        console.log(json);
        this.setState({agencies: json})

      })

  }

  render() {
    return (
      <View>
        <UserForm onSearch={this.onSearch}/>
        <AgencyList agencies={this.state.agencies} />
      </View>

    )
  }
};


export default Wrapper;
