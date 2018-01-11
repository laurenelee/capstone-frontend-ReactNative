import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
// import AgencyDetail from './AgencyDetail';
import CardSection from './CardSection';
import IndividualCard from './IndividualCard';
import Button from './Button';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
// props data is the WHOLE list of data from agency detail
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
          <Button onPress={() => Linking.openURL(this.props.url)}>
          Volunteer Here!
          </Button>
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
        <Text style={styles.noMoreCardsText}>No more agencies</Text>
      </View>
    )
  }
}

class AgencyCards extends React.Component {
  constructor(props) {
    super(props);
      console.log(props.list);
    this.state = {
      // agency list (individual agency)
      cards: props.list
    };
  }

  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.text}`)
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}

    // cards is agency list
    // cardData is agency detail
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
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
    height: 370,
  }
})

export default AgencyCards;
