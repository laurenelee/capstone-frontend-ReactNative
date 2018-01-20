import React, { Component } from 'react';
import { Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import IndividualCard from './IndividualCard';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';

class UserForm extends Component {
  state = { name: '', age_minimum: '', volunteer_type: '', zip: '', parent_email: '' };

  onButtonPress() {
    const { name, age_minimum, volunteer_type, zip, parent_email } = this.state;

    if (name == '' || age_minimum == '' || zip == '' || volunteer_type == '') {
      this.setState( {error: 'All fields required'});
    } else {
        this.props.onSearch(volunteer_type, zip, age_minimum)
    };
  }

  render() {
    let volunteer_type = [{
      value: 'Seniors',
    }, {
      value: 'Homelessness',
    }, {
      value: 'Arts and Culture',
    }, {
      value: 'Animals',
    }, {
      value: 'Advocacy and Human Rights',
    }, {
      value: 'Children and Youth',
    }, {
      value: 'Computers and Technology',
    }, {
      value: 'Community',
    }, {
      value: 'Education and Literacy',
    }, {
      value: 'Health and Medicine',
    }, {
      value: 'Disaster Relief',
    }, {
      value: 'LGBT',
    }, {
      value: 'Justice and Legal',
    }, {
      value: 'Environment',
    }, {
      value: 'Faith-Based',
    }, {
      value: 'Crisis Support',
    }, {
      value: 'Immigrants and Refugees',
    }, {
      value: 'Sports and Recreation',
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
    marginLeft: 10,
    marginRight: 10,
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
