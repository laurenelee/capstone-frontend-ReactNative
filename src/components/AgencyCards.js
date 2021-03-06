import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Linking, TouchableHighlight} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import CardSection from './CardSection';
import IndividualCard from './IndividualCard';
import IconButton from './IconButton';
import MatchPage from './MatchPage';
import FontAwesome, { Icons } from 'react-native-fontawesome';

const SWIPE_THRESHOLD = 50;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
      cards: props.list,
      maybeMatches: props.maybeMatches
    }
  }

  render() {
    return (
      <IndividualCard>
        <CardSection >
          <View style={{paddingTop: 5}}>
            <Image
            style={styles.imageStyle}
            source= {{ uri: this.props.photo_url }}
            />
          </View>

          <View style={styles.headerContentStyle}>
            <Text style={styles.bold}>{this.props.name}</Text>

            <Text><FontAwesome style={styles.fontAwesome}>{Icons.handshakeO}
            </FontAwesome>   {this.props.volunteer_type}</Text>

            <Text><FontAwesome style={styles.fontAwesome}>{Icons.mapMarker}
            </FontAwesome>       {this.props.zip}</Text>

            <Text><FontAwesome style={styles.fontAwesome}>{Icons.idCardO}
            </FontAwesome>    {this.props.age_minimum}</Text>

            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                paddingTop: 10}}/>

            <Text style={{paddingTop: 10, paddingBottom: 10 }}>{this.props.description}</Text>

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
      maybeMatches: props.maybeMatches
    }
  }

  render() {

    return (
      <SwipeCards style={{flex:1}}
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        smoothTransition={true}
        matchMoment={this.props.matchMoment}
        handleYup={this.props.handleYup}
        handleNope={this.props.handleNope}
        handleMaybe={this.props.handleMaybe}
        showMatchList={this.props.showMatchList}
        hasMaybeAction={true}

        maybeMatches={this.props.maybeMatches}

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
    fontSize: 30,
    color: '#EC174F'
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 15,
    paddingRight: 15
  },
  fontAwesome: {
    color: '#007aff',
    fontSize: 20,
  },
  imageStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 270,
    paddingTop: 5
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  }
})

export default AgencyCards;
