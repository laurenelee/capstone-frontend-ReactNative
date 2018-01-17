import React, { Component } from 'react';
import { View } from 'react-native';
import AgencyList from './AgencyList';
import UserForm from './UserForm';
import MatchPage from './MatchPage';
import Header from './header';
import MatchList from './MatchList';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      agencies: [],
      pageToshow: UserForm,
      card: props.card,
      maybeMatches: [],
      yesMatches: []
    }
    this.returnToForm = this.returnToForm.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.matchMoment = this.matchMoment.bind(this);
    this.returnToCards = this.returnToCards.bind(this);
    this.handleYup = this.handleYup.bind(this);
    this.handleNope = this.handleNope.bind(this);
    this.handleMaybe = this.handleMaybe.bind(this);
    this.showMatchList = this.showMatchList.bind(this);
  }
  returnToForm() {
    console.log(`wrapper file returntoform function`)
    this.setState({
      pageToshow: UserForm
    })
  }
  returnToCards() {
    console.log(`wrapper file returnToCards function`)
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
        pageToshow: AgencyList,
        maybeMatches: [],
        yesMatches: []
      })
    })
  }
  matchMoment(card) {
    this.state.card = card
    this.setState({
      pageToshow: MatchPage
    })
    console.log(`wrapper file Matchmoment  for ${card.name}`)
  }
  handleYup(card) {
    console.log(`Wrapper file Yes for ${card.name}`)
    this.matchMoment(card)
  }
  handleNope(card) {
    console.log(`Wrapper file Nope for ${card.name}`)
  }
  handleMaybe(card) {
    console.log(card);
    this.setState({
      maybeMatches: card
    })
    console.log(`Wrapper file Maybe for ${card.name}`)
  }
  showMatchList() {
    this.setState({
      pageToshow: MatchList
    })
  }

  render() {
    return (
      <View>

        {this.state.pageToshow == UserForm && (
          <View>
          <Header headerText={'Find Opportunities'} />
          <UserForm onSearch={this.onSearch}/>
          </View>
        )}

        {this.state.pageToshow == AgencyList && (
          <View>
            <AgencyList
            agencies={this.state.agencies}
            matchMoment={this.matchMoment}
            handleYup={this.handleYup}
            handleNope={this.handleNope}
            handleMaybe={this.handleMaybe}
            showMatchList={this.showMatchList}
            returnToForm={this.returnToForm}/>
          </View>
        )}

        {this.state.pageToshow == MatchPage && (
            <View>
              <MatchPage
              card={this.state.card}
              agencies={this.state.agencies}
              returnToCards={this.returnToCards}
              matchMoment={this.matchMoment}
              returnToForm={this.returnToForm}
              handleYup={this.handleYup}
              handleMaybe={this.handleMaybe}
              showMatchList={this.showMatchList}

              />
            </View>
        )}

        {this.state.pageToshow == MatchList && (
            <View>
            <MatchList
            card={this.state.card}
            // agencies={this.state.agencies}
            returnToForm={this.returnToForm}
            returnToCards={this.returnToCards}
            handleMaybe={this.handleMaybe}
            handleYup={this.handleYup}
            showMatchList={this.showMatchList}
            />
            </View>
        )}

      </View>
    )
  }
};


export default Wrapper;
