import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';
// import { Slider } from 'react-native-elements'
// import Slider from "react-native-slider";
// import NMRangeSliderIOS from 'react-native-nmrangeslider-ios';



class UserForm extends Component {
  state = { name: '', age: '', volunteer_type: '', distance: '' };

  onButtonPress() {
    const { name, age, volunteer_type, distance } = this.state;
    this.props.onSearch(volunteer_type) //this is the last thing that happens

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
    const { dropdownStyle, container } = styles;

    return (
      <Card>

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
      value={this.state.age}
      onChangeText={age => this.setState({ age })}
      />
      </CardSection>

      <CardSection>
      <Input
      placeholder="20 miles"
      label="Search Distance:"
      value={this.state.distance}
      onChangeText={distance => this.setState({ distance })}
      />
      </CardSection>

      <Dropdown
      style={dropdownStyle}
      label='Volunteer Type'
      value={this.state.volunteer_type}
      data={volunteer_type}
      onChangeText={volunteer_type => this.setState({ volunteer_type })}
      />

      <CardSection>
      <Button onPress={this.onButtonPress.bind(this)}>
      Find Opportunities!
      </Button>
      </CardSection>

      </Card>
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
  }
};
export default UserForm;
