import React, { Component } from 'react';
import { View } from 'react-native';
// import Header from './src/components/header';
import AgencyList from './AgencyList';
import UserForm from './UserForm';
// import Router from './Router';
import SwipeCards from './SwipeCard';
import AgencyDetail from './AgencyDetail';

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
// http://localhost:3000/search?volunteer_type=environment&zip=98104&age_minimum=17
  onSearch(volunteer_type, zip, age_minimum) {
    console.log('searching ');
    fetch(`http://localhost:3000/search?volunteer_type=${volunteer_type}&zip=${zip}&age_minimum=${age_minimum}`) 
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
          <View>
            <AgencyList agencies={this.state.agencies}
            returnToForm={this.returnToForm}/>
          </View>
        )}
      </View>
    )
  }
};


export default Wrapper;
