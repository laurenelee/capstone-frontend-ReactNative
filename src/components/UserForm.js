import React, { Component } from 'react';
import { Picker } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';

class UserForm extends Component {
  state = { name: '', age: '', volunteer_interest: '', distance: '' };

  render() {
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
        <Picker
        label="Volunter Type:"
          selectedValue={this.state.volunteer_interest}
          onValueChange={(itemValue, itemIndex) => this.setState({volunteer_interest: itemValue})}>
          <Picker.Item label="seniors" value="seniors" />
          <Picker.Item label="homelessness" value="homelessness" />
          <Picker.Item label="arts and culture" value="arts and culture" />
        </Picker>
      </CardSection>

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

export default UserForm;
