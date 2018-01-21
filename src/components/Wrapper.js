import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Modal } from 'react-native';
import AgencyList from './AgencyList';
import UserForm from './UserForm';
import MatchPage from './MatchPage';
import Header from './header';
import MatchList from './MatchList';
import Button from './Button';
import Tutorial from './Tutorial';
import SplashPageButton from './SplashPageButton';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      agencies: [],
      pageToshow: '',
      card: '',
      maybeMatches: [],
      yesMatches: [],
      modalVisible: false
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
  onButtonPress() {
    this.setState({
      pageToshow: UserForm
    })
  }
  onTutorialShow() {
    this.setState({
      pageToshow: tutorial
    })
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
    // https://volley-api.herokuapp.com
    // http://localhost:3000
    fetch(`https://volley-api.herokuapp.com/search?volunteer_type=${volunteer_type}&zip=${zip}&age_minimum=${age_minimum}`)
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
      console.log(this.state);
    })
  }
  handleMaybe(card) {
    console.log(card);
    this.state.card = card
    console.log(card);
    this.setState({
      maybeMatches: [...this.state.maybeMatches, card]
    })
    console.log(this.state, `Wrapper file Maybe for ${card.name}`)
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
    console.log(this.state.agencies);
    this.remove(this.state.agencies, card)
    console.log(this.state.agencies);
  }
  remove(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
  }
  showMatchList() {
    this.setState({
      pageToshow: MatchList
    })
  }
  openModal() {
    this.setState({modalVisible:true});
  }
  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    const { SplashPageText, BackgroundImage, image, container, modalContainer, innerContainer } = styles;

    return (
      <View>

      {this.state.pageToshow == '' && (
        <View>
        <ImageBackground style={BackgroundImage} source={require("../../volley1.jpeg")}>
          <Text style={SplashPageText}> Welcome to VOLLEY </Text>
          <Image
          style={image}
          source = {require("../../volley.png")} />

          <SplashPageButton onPress={this.onButtonPress.bind(this)}>
          Start the Search
          </SplashPageButton>
          <View style={{paddingTop: 10}}/>
          <View>
            <Modal
                visible={this.state.modalVisible}
                animationType={'slide'}
                onRequestClose={() => this.closeModal()}>
              <View style={modalContainer}>
                <View>
                  <Tutorial />
                  <SplashPageButton onPress={() => this.closeModal()}>Okay got it... I feel ready to swipe!
                  </SplashPageButton>
                </View>
              </View>
            </Modal>
            <SplashPageButton
                onPress={() => this.openModal()}>
                How to VOLLEY
            </SplashPageButton>
          </View>
        </ImageBackground>
        </View>
      )}

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
        card={this.state.card}
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
        <Header headerText={'All of your Matches'} />
        <MatchList
        card={this.state.card}
        maybeMatches={this.state.maybeMatches}
        agencies={this.state.agencies}
        returnToForm={this.returnToForm}
        returnToCards={this.returnToCards}
        handleMaybe={this.handleMaybe}
        handleYup={this.handleYup}
        showMatchList={this.showMatchList}
        // renderMaybes={this.renderMaybes}
        />
        </View>
      )}

      </View>
    )
  }
};

const styles = {
  SplashPageText: {
    // alignSelf: 'center',
    fontFamily: 'AmericanTypewriter-Bold',
    textAlign: 'center',
    paddingTop: 80,
    paddingBottom: 20,
    backgroundColor: 'transparent',
    color: '#EC174F',
    textShadowRadius: 2,
    textShadowOffset: {width: 0, height: 2},
    textShadowColor: 'rgb(102, 88, 47)',
    fontWeight: '600',
    fontSize: 50,
    marginLeft: 5,
    marginRight: 5
  },
  BackgroundImage: {
    width: 375,
    height: 700
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EC174F'
  },
  innerContainer: {
    alignItems: 'center',
  },
}


export default Wrapper;
