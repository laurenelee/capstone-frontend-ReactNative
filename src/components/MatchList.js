import React, { Component } from 'react';
import { Text, View, Linking, Image, TextInput, Alert } from 'react-native';
import Header from './header';
import Button from './Button';
import ButtonIcon from './ButtonIcon';
import IndividualCard from './IndividualCard';
import CardSection from './CardSection';
import FontAwesome, { Icons } from 'react-native-fontawesome';


class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: MatchList,
      card: props.card,
      maybeMatches: props.maybeMatches,
      parent_email: ''
      // cards: props.agencies,
    }
    console.log(this.state);
  }
  onButtonPress() {
    this.props.returnToCards()
  }
  pressBackButton() {
    // this.alert('List sent!')
    this.props.returnToForm()
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
  alert(msg) {
    console.log(msg)
  }
  sendEmail() {
    this.alert('List sent!')
  }
  onSend() {
    if (this.state.parent_email == '') {
      this.setState( {error: 'Email required'});
    } else {
      Alert.alert(
        'Press OK to send this list to your parent',
        'REMINDER: A parent must sign a consent form before you can volunteer',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
          {text: 'OK', onPress: this.pressBackButton.bind(this)},
        ],
        { cancelable: false }
      )}
    }
  render() {
    const { pageStyle, viewStyle, listStyle, formStyle, errorTextStyle } = styles;

    return (
      <IndividualCard>

        <CardSection>
          <View style={pageStyle}>
            <Text style={viewStyle}>Your <B>Yes</B> Matches: </Text>

            <Text style={{marginLeft: 20}}>
              <Image style={{width: 30, height: 30, borderRadius: 15}} source= {{ uri: this.state.card.photo_url}}/>
              <Text onPress={() => Linking.openURL(this.state.card.url)} style={{fontSize: 25}}> {this.state.card.name} </Text>
            </Text>

            <Text style={viewStyle}>Your <B>Maybe</B> Swipes:</Text>
            {this.renderMaybeText()}
          </View>


          <Button
            onPress={this.onButtonPress.bind(this)}> Keep swiping!
          </Button>

          <Text style={{paddingBottom: 3}} />
          <Button
            onPress={this.pressBackButton.bind(this)}>
            New search
          </Button>

          <Text style={{paddingTop: 20, paddingBottom: 6}} >Send this list to my parent: </Text>

          <View style={{flexDirection: 'row', alignSelf: 'stretch'}}>

            <ButtonIcon onPress={this.onSend.bind(this)}>
              <FontAwesome style={{fontSize: 30, color: '#007aff'}}>
                {Icons.sendO}
              </FontAwesome>
            </ButtonIcon>

            <TextInput
              style={formStyle}
              placeholder="  mom@email.com"
              label="Parent Email:"
              value={this.state.parent_email}
              onChangeText={(parent_email) => this.setState({parent_email})}
            />

          </View>
        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>
        <Text style={{paddingBottom: 10}} />

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
    paddingBottom: 20
  },
  formStyle: {
    height: 40,
    width: 300,
    // alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    // marginLeft: 20,
    // marginRight: 20,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}


export default MatchList;
