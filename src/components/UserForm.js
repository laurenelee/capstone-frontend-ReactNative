import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';

class UserForm extends Component {
  state = { name: '', age: '', volunteer_type: '', distance: '' };
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
    const { dropdownStyle } = styles;

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

      <Dropdown
        style={dropdownStyle}
        label='Volunteer Type'
        data={volunteer_type}
      />

      <CardSection>
        <Input
        placeholder="5 miles"
        label="Search Distance:"
        value={this.state.distance}
        onChangeText={distance => this.setState({ distance })}
        />
      </CardSection>

      <CardSection>
        <Button>
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
  }
};
export default UserForm;
