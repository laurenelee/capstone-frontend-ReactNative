import React, { Component } from 'react';
import { View } from 'react-native';
import AgencyList from './AgencyList';
import UserForm from './UserForm';
import MatchPage from './MatchPage';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      agencies: [],
      pageToshow: UserForm
    }
    this.returnToForm = this.returnToForm.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.matchMoment = this.matchMoment.bind(this);
    this.returnToCards = this.returnToCards.bind(this);
  }

  returnToForm() {
    this.setState({
      pageToshow: UserForm
    })
  }
  returnToCards() {
    this.setState({
      pageToshow: AgencyList 
    })
  }

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

  matchMoment(card) {
    this.state.card = card
    this.setState({
      pageToshow: MatchPage
    })

    console.log('checking that matchMoment is called');
  }

  render() {
    return (
      <View>

        {this.state.pageToshow == UserForm && (
          <UserForm onSearch={this.onSearch}/> ) }

        {this.state.pageToshow == MatchPage && (
            <View>
              <MatchPage card={this.state.card}
              agencies={this.state.agencies}
              returnToCards={this.returnToCards}
              matchMoment={this.matchMoment}/>
            </View>
        )}

        {this.state.pageToshow == AgencyList && (
          <View>
            <AgencyList agencies={this.state.agencies}
            matchMoment={this.matchMoment}
            returnToForm={this.returnToForm}/>
          </View>
        )}

      </View>
    )
  }
};


export default Wrapper;
