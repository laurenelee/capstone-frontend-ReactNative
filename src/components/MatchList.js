import React, { Component } from 'react';
import { Text, View, Linking, Image, TextInput, Alert, ScrollView } from 'react-native';
import Header from './header';
import Button from './Button';
import ButtonIcon from './ButtonIcon';
import IndividualCard from './IndividualCard';
import CardSection from './CardSection';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ToggleBox from './ToggleBox';

class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: MatchList,
      card: props.card,
      maybeMatches: props.maybeMatches,
      parent_email: '',
      // cards: props.agencies,
    }
    console.log(this.state);
  }
  onButtonPress() {
    this.props.returnToCards()
  }
  pressBackButton() {
    this.props.returnToForm()
  }
  renderMaybeText() {
    return this.props.maybeMatches.map(maybe =>
      <Text style={{fontSize: 20, marginLeft: -30, flexDirection: 'column'}} key={maybe.id}>
        <Image style={{width: 30, height: 30, borderRadius: 15}} source= {{ uri: maybe.photo_url}}/>

        <Text onPress={() => console.log(`pressing ${maybe.name}`)}> {maybe.name}
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
  showData() {
    console.log('in showData function');
    return
    <ToggleBox label='Show me something' value='asd' style={{backgroundColor: '#ddd', borderBottomWidth: 1}}>

      <View style={{height: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee'}}>

      <Text>Hello, how are you?</Text>
      </View>
    </ToggleBox>
    console.log('bottom of showData function');
  }
  render() {
    const { pageStyle, viewStyle, listStyle, formStyle, errorTextStyle } = styles;

    return (
      <ScrollView>
      <IndividualCard>

        <CardSection>
          <View style={pageStyle}>
            <Text style={viewStyle}>Your <B>Yes</B> Matches: </Text>

            <View style={{marginLeft: -30, fontSize: 20}}>
              <Image style={{width: 30, height: 30, borderRadius: 15}} source= {{ uri: this.state.card.photo_url}}/>

              <ToggleBox label={this.state.card.name} value='more' style={{backgroundColor: '#ddd', borderBottomWidth: 1}}>

                <View style={{height: 30, backgroundColor: '#eee'}}>
                <Text>{this.state.card.volunteer_type}</Text>
                </View>

              </ToggleBox>
            </View>

            <Text style={{paddingBottom: 10}} />
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

          <Text style={{paddingTop: 20, paddingBottom: 6, backgroundColor: 'transparent', fontSize: 15}} >Send this list to my parent: </Text>

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
      </ScrollView>

    )
  }
}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const styles = {
  viewStyle: {
    fontSize: 23,
    // fontFamily: 'AmericanTypewriter',
    marginLeft: -30,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'black'
  },
  listStyle: {
    // textAlign: 'center',
    fontSize: 25,
    paddingBottom: 2,
    marginLeft: -80
  },
  pageStyle: {
    // paddingTop: 10,
    paddingBottom: 20
  },
  formStyle: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,

  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}


export default MatchList;
