import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Linking, TouchableHighlight} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import CardSection from './CardSection';
import IndividualCard from './IndividualCard';
import IconButton from './IconButton';
import MatchPage from './MatchPage';

const SWIPE_THRESHOLD = 50;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IndividualCard>
        <CardSection>
          <View>
            <Image
            style={styles.imageStyle}
            source= {{ uri: this.props.photo_url }}
            />
          </View>

          <View style={styles.headerContentStyle}>
            <Text style={styles.bold}>{this.props.name}</Text>
            <Text><B>Volunteer Type: </B> {this.props.volunteer_type}</Text>
            <Text><B>Description:  </B>{this.props.description}</Text>
            <Text><B>Zipcode: </B>{this.props.zip}</Text>
            <Text><B>Age Minimum: </B>{this.props.age_minimum}</Text>
          </View>
        </CardSection>

        <CardSection>
          <View style={styles.icons}>
            <IconButton onPress={this.handleNope}>
             <Image
             style={{width: 50, height: 50}} source={require("../../x.png")}/>
            </IconButton>

            <IconButton onPress={() => Linking.openURL(this.props.url)}>
            <Image
            style={{width: 50, height: 50}} source={require("../../heart.png")}/>
            </IconButton>
          </View>
        </CardSection>

      </IndividualCard>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>
          Out of matches!
          No more agencies
        </Text>
      </View>
    )
  }
}

class AgencyCards extends React.Component {
  constructor(props) {
    super(props);
      console.log(props.list);
    this.state = {
      cards: props.list,
      matchMoment: props.matchMoment
    }
    // this.returnToCards = this.returnToCards.bind(this);

  }
  // returnToCards() {
  //   this.setState({
  //     pageToshow: AgencyCards
  //   })
  // }

  handleYup(card) {
    // console.log(`Yup for ${card.name} ${card.volunteer_type}`)
    this.props.matchMoment(card)
  }
  handleNope(card) {
    console.log(`Nope for ${card.name}`)
  }
  // handleMaybe(card) {
  //   console.log(`Maybe for ${card.name}`)
  // }
  render() {
    return (
      <SwipeCards style={{flex:1}}
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        // returnToCards={this.returnToCards}
        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope}
        // handleMaybe={this.handleMaybe}
        // hasMaybeAction
      />
    )
  }
}

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const styles = StyleSheet.create({
  noMoreCardsText: {
    fontSize: 22,
    paddingTop: 20,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 30
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 270,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    // width: 50,
    // height: 50,
  }
})

export default AgencyCards;
