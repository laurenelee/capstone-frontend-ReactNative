import React, { Component } from 'react';
import { Text, View, Linking, TouchableWithoutFeedback } from 'react-native';
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
  // onMouseHover() {
  //   style={{color: 'pink'}}
  // }
  renderMaybes() {
    return this.props.maybeMatches.map(maybe => <Text style={styles.listStyle}
      // this.onMouseHover()
      onPress={() => Linking.openURL(maybe.url)}
      key={maybe.id}> {maybe.name} </Text>
    )
  }
  // colorText: function() {
  //   this.setState({textColored: true});
  // },
  // resetText: function() {
  //   this.setState({textColored: false});
  // },
  // textColored: function() {
  //   if(this.state.textColored) {
  //     return styles.textColored;
  //   } else {
  //     return styles.textNormal;
  //   }
  // }

  // <TouchableWithoutFeedback onPressIn={this.colorText}  onPressOut={this.resetText}>
  // <Text style={[styles.textColored()]}>MyText</Text>
  // </TouchableWithoutFeedback>

  render() {
    const { pageStyle, viewStyle, listStyle } = styles;

    return (
      <IndividualCard>
      <CardSection>
      <View style={pageStyle}>
      <Text style={viewStyle}>Your Yes Matches: </Text>
      <Text style={listStyle}>{this.state.card.name} </Text>
      <Text style={viewStyle}>Your Maybe Swipes:</Text>
      {this.renderMaybes()}
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
const styles = {
  viewStyle: {
    fontSize: 30,
    fontFamily: 'AmericanTypewriter-Bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10
  },
  listStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
  pageStyle: {
    paddingTop: 10,
    paddingBottom: 60
  },
}


export default MatchList;
