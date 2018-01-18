import React, { Component } from 'react';
import { Text, View, Linking, TouchableWithoutFeedback, Image } from 'react-native';
import Header from './header';
import Button from './Button';
import IndividualCard from './IndividualCard';
import CardSection from './CardSection';

class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: MatchList,
      card: props.card,
      maybeMatches: props.maybeMatches
      // cards: props.agencies,
    }
    console.log(this.state);
  }
  onButtonPress() {
    this.props.returnToCards()
  }

  renderMaybeText() {
    return this.props.maybeMatches.map(maybe =>

      <Text style={{marginLeft: 20, paddingBottom: 5, paddingTop: 10}} key={maybe.id}>
        <Image style={{width: 30, height: 30, borderRadius: 15}} source= {{ uri: maybe.photo_url}}/>

        <Text style={styles.listStyle} onPress={() => Linking.openURL(maybe.url)}> {maybe.name}
        </Text>
      </Text>
    )
  }
  render() {
    const { pageStyle, viewStyle, listStyle } = styles;

    return (
      <IndividualCard>

        <CardSection>
          <View style={pageStyle}>
            <Text style={viewStyle}>Your <B>Yes</B> Matches: </Text>

            <Text style={{marginLeft: 20}}>
              <Image style={{width: 30, height: 30, borderRadius: 15}} source= {{ uri: this.state.card.photo_url}}/>
              <Text style={{fontSize: 25}}> {this.state.card.name} </Text>
            </Text>

            <Text style={viewStyle}>Your <B>Maybe</B> Swipes:</Text>
            {this.renderMaybeText()}
          </View>
        </CardSection>

        <CardSection>
          <Button
          onPress={this.onButtonPress.bind(this)}> Keep swiping!
          </Button>
        </CardSection>

      </IndividualCard>
    )
  }
}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const styles = {
  viewStyle: {
    fontSize: 33,
    fontFamily: 'AmericanTypewriter',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    // color: '#EC174F'
  },
  listStyle: {
    textAlign: 'center',
    fontSize: 25,
    paddingBottom: 2
  },
  pageStyle: {
    paddingTop: 10,
    paddingBottom: 30
  },
}


export default MatchList;
