import React, { Component } from 'react';
import { Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import IndividualCard from './IndividualCard';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';
// import { Slider } from 'react-native-elements'
// import Slider from "react-native-slider";
// import NMRangeSliderIOS from 'react-native-nmrangeslider-ios';



class UserForm extends Component {
  state = { name: '', age_minimum: '', volunteer_type: '', zip: '', parent_email: '' };

  onButtonPress() {
    const { name, age_minimum, volunteer_type, zip, parent_email } = this.state;

    // this.props.onSearch(zip)
    //this is the last thing that happens

    if (name == '' || age_minimum == '' || zip == '' || parent_email == '' || volunteer_type == '') {
      this.setState( {error: 'All fields required'});
    } else {
        this.props.onSearch(volunteer_type, zip, age_minimum)
    };
  }

  render() {
    let volunteer_type = [{
      value: 'seniors',
    }, {
      value: 'homelessness',
    }, {
      value: 'arts and culture',
    }, {
      value: 'animals',
    }, {
      value: 'advocacy and human rights',
    }, {
      value: 'children and youth',
    }, {
      value: 'computers and technology',
    }, {
      value: 'community',
    }, {
      value: 'education and literacy',
    }, {
      value: 'health and medicine',
    }, {
      value: 'disaster relief',
    }, {
      value: 'LGBT',
    }, {
      value: 'justice and legal',
    }, {
      value: 'environment',
    }, {
      value: 'faith-based',
    }, {
      value: 'crisis support',
    }, {
      value: 'immigrants and refugees',
    }, {
      value: 'sports and recreation',
    }];
    const { dropdownStyle, container, errorTextStyle } = styles;

    return (
      <IndividualCard>

      <CardSection>
      <Input
      placeholder="Ada Lovelace"
      label="Name:"
      value={this.state.name}
      onChangeText={name => this.setState({ name })}
      />
      </CardSection>

      <CardSection>
      <Input
      placeholder="14"
      label="Age:"
      value={this.state.age_minimum}
      onChangeText={age_minimum => this.setState({ age_minimum })}
      />
      </CardSection>

      <CardSection>
      <Input
      placeholder="98101"
      label="Zipcode:"
      value={this.state.zip}
      onChangeText={zip => this.setState({ zip })}
      />
      </CardSection>

      <CardSection>
      <Input
      placeholder="mom@email.com"
      label="Parent Email:"
      value={this.state.parent_email}
      onChangeText={parent_email => this.setState({ parent_email })}
      />
      </CardSection>

      <Dropdown
      style={dropdownStyle}
      label='Volunteer Type'
      value={this.state.volunteer_type}
      data={volunteer_type}
      onChangeText={volunteer_type => this.setState({ volunteer_type })}
      />

      <Text style={errorTextStyle}>
      {this.state.error}
      </Text>

      <CardSection>
      <Button onPress={this.onButtonPress.bind(this)}>
      Find Opportunities!
      </Button>
      </CardSection>

      </IndividualCard>
    );
  }
}
const styles = {
  dropdownStyle: {
    color: '#000',
    paddingRight: 1,
    paddingLeft: 140,
    fontSize: 18
  },
  container: {
    flex: 1,
    // marginLeft: 10,
    // marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
export default UserForm;
