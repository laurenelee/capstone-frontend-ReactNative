import React, { Component } from 'react';
import { View } from 'react-native';
// import Header from './src/components/header';
import AgencyList from './AgencyList';
import UserForm from './UserForm';
// import Router from './Router';
import SwipeCards from './SwipeCard';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state  = {
      agencies: [],
      pageToshow: UserForm
    }
    this.returnToForm = this.returnToForm.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  returnToForm() {
    this.setState({
      pageToshow: UserForm
    })
  }

  onSearch(volunteer_type) {
    console.log('searching ');
    fetch(`http://localhost:3000/search?volunteer_type=${volunteer_type}`)
    .then(function(response) {
      return response.json()
    }).then((json) => {
      console.log(json);
      this.setState({
        agencies: json,
        pageToshow: AgencyList
      })

    })

  }

  render() {
    return (
      // start at UserForm
      // if statement if the find opportunities button has been clicked, then see the matching agency list
      <View>
        {this.state.pageToshow == UserForm && (
          <UserForm onSearch={this.onSearch}/> ) }
        {this.state.pageToshow == AgencyList && (
          <AgencyList agencies={this.state.agencies} returnToForm={this.returnToForm} SwipeCards/>
        )}
      </View>
    )
  }
};


export default Wrapper;
