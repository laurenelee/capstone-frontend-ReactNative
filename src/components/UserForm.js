import React, { Component } from 'react';
import { TextInput } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class UserForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>

      <CardSection>
        <TextInput
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        style={{ height: 20, width: 100 }} />
      </CardSection>

      <CardSection>
        
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
