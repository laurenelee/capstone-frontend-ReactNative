import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Modal } from 'react-native';
import AgencyList from './AgencyList';
import UserForm from './UserForm';
import MatchPage from './MatchPage';
import Header from './header';
import MatchList from './MatchList';
// import SplashPage from './SplashPage';
import Button from './Button';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      agencies: [],
      pageToshow: '',
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
      console.log(this.state);
    })
  }
  handleMaybe(card) {
    console.log(card);
    this.state.card = card
    console.log(card);
    this.setState({
      maybeMatches: [...this.state.maybeMatches, card.name]
      // maybeMatches: this.state.maybeMatches.concat([card])
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
  }
  showMatchList() {
    this.setState({
      pageToshow: MatchList
    })
  }

  state = {
    modalVisible: false,
  };
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

          <Button onPress={this.onButtonPress.bind(this)}>
          start searching
          </Button>

          <View style={container}>
            <Modal
                visible={this.state.modalVisible}
                animationType={'slide'}
                onRequestClose={() => this.closeModal()}>
              <View style={modalContainer}>
                <View style={innerContainer}>
                  <Text>This is content inside of modal component</Text>
                  <Button onPress={() => this.closeModal()}>ok got it!
                  </Button>
                </View>
              </View>
            </Modal>
            <Button
                onPress={() => this.openModal()}>
                Tutorial Instructions
            </Button>
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
    color: 'rgb(252, 198, 59)',
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
    // backgroundColor: 'transparent',
    alignSelf: 'center',
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
}


export default Wrapper;
