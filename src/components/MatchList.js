import React, { Component } from 'react';
import { Share, Text, View, Linking, Image, TextInput, Alert, ScrollView } from 'react-native';
import Header from './header';
import Button from './Button';
import ButtonIcon from './ButtonIcon';
import IndividualCard from './IndividualCard';
import CardSection from './CardSection';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ToggleBox from './ToggleBox';
import MatchButton from './MatchButton';
// import Mailer from 'react-native-mail';
import Communications from 'react-native-communications';

var Mailer = require('NativeModules').RNMail;


class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      pageToshow: MatchList,
      card: props.card,
      maybeMatches: props.maybeMatches,
      parent_email: '',
      show: true
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
      <View style={styles.listStyle} key={maybe.id}>

        <ToggleBox label={maybe.name} photo_url={maybe.photo_url}  style={{backgroundColor: '#ddd', borderBottomWidth: 1}}>

          <View style={{backgroundColor: '#eee'}}>
          <Text><FontAwesome style={styles.fontAwesome}>{Icons.handshakeO}
          </FontAwesome>   {maybe.volunteer_type}</Text>

          <Text><FontAwesome style={styles.fontAwesome}>{Icons.mapMarker}
          </FontAwesome>       {maybe.zip}</Text>

          <Text><FontAwesome style={styles.fontAwesome}>{Icons.idCardO}
          </FontAwesome>    {maybe.age_minimum}</Text>
          <Text style={{paddingBottom: 5}} />
          <Text>{maybe.description} </Text>
          <Text style={{paddingBottom: 5}} />
          <Button onPress={() => Linking.openURL(maybe.url)}><Text> Sign up Now
           <FontAwesome style={styles.fontAwesome}> {Icons.externalLink}
          </FontAwesome> </Text> </Button>
          <Text style={{paddingBottom: 5}} />
          </View>
        </ToggleBox>

      </View>
    )
  }
  alert(msg) {
    console.log(msg)
  }
  sendEmail() {
    // Mailer.mail({
    //   subject: 'need help',
    //   recipients: ['support@example.com'],
    //   ccRecipients: ['supportCC@example.com'],
    //   bccRecipients: ['supportBCC@example.com'],
    //   body: '<b>A Bold Body</b>',
    //   isHTML: true,
    //   attachment: {
    //     path: '',  // The absolute path of the file from which to read data.
    //     type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
    //     name: '',   // Optional: Custom filename for attachment
    //   }
    // }, (error, event) => {
    //   Alert.alert(
    //     error,
    //     event,
    //     [
    //       {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
    //       {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
    //     ],
    //     { cancelable: true }
    //   )
    // });
    this.alert('List sent!')
  }
  // Linking.openURL('mailto:example@gmail.com?subject=Volunteering&body=example')
  // Share.share({
    //   message: 'Such sharing! Much wow!'
    // })
  //  .then(this._showResult)
  onSend() {
    if (this.state.parent_email == '') {
      this.setState( {error: 'Email required'});
    } else {
      Communications.email(this.state.parent_email,null,null,'Volunteer Opportunities','Here is a list of agencies!')
      Alert.alert(
        'Press OK to send this list to your parent',
        'REMINDER: A parent must sign a consent form before you can volunteer',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
          {text: 'OK', onPress: () => this.setState({show:false})},
        ],
        { cancelable: false }
        )
      }
    }
    // email(to, cc, bcc, subject, body)
    hideData() {
      if (this.state.show == true){
      return <View visible={this.state.show} show={true}>
        <Text style={{paddingTop: 20, paddingBottom: 6, backgroundColor: 'transparent', fontSize: 15}} >Send this list to my parent: </Text>

          <View style={{flexDirection: 'row', alignSelf: 'stretch'}}>

          <ButtonIcon onPress={this.onSend.bind(this)}>
              <FontAwesome style={{fontSize: 30, justifyContent: 'center', color: 'white'}}>
                {Icons.sendO}
              </FontAwesome>
            </ButtonIcon>

            <TextInput
              style={styles.formStyle}
              placeholder="  mom@email.com"
              label="Parent Email:"
              value={this.state.parent_email}
              onChangeText={(parent_email) => this.setState({parent_email})}
            />
          </View>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <Text style={{paddingBottom: 10}} />
        </View>
      }
    }
  render() {
    console.log(this.props)
      const { pageStyle, viewStyle, listStyle, formStyle, errorTextStyle, fontAwesome } = styles;


    return (
      <ScrollView >
        <IndividualCard>
        <CardSection>
          <View style={pageStyle}>
            <Text style={viewStyle}>Your <B>Yes</B> Matches: </Text>

            <View style={listStyle}>

              <ToggleBox label={this.state.card.name} photo_url={this.state.card.photo_url}  style={{backgroundColor: '#ddd', borderBottomWidth: 1}}>

                <View style={{backgroundColor: '#eee'}}>
                <Text><FontAwesome style={fontAwesome}>{Icons.handshakeO}
                </FontAwesome>   {this.state.card.volunteer_type}</Text>

                <Text><FontAwesome style={fontAwesome}>{Icons.mapMarker}
                </FontAwesome>       {this.state.card.zip}</Text>

                <Text><FontAwesome style={fontAwesome}>{Icons.idCardO}
                </FontAwesome>    {this.state.card.age_minimum}</Text>
                <Text style={{paddingBottom: 5}} />
                <Text>{this.state.card.description} </Text>
                <Text style={{paddingBottom: 5}} />
                <Button onPress={() => Linking.openURL(this.state.card.url)}><Text> Sign up Now
                 <FontAwesome style={fontAwesome}> {Icons.externalLink}
                </FontAwesome> </Text> </Button>
                <Text style={{paddingBottom: 5}} />
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
          {this.hideData()}

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
    paddingTop: 10,
    paddingBottom: 10,
    color: 'black',
  },
  listStyle: {
    paddingBottom: 2,
  },
  pageStyle: {
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
  },
  fontAwesome: {
    color: '#007aff',
    fontSize: 20,
  },
  hidden: {
    height: 0,
  }
}


export default MatchList;
