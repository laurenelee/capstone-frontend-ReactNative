import React, { Component } from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';

class UserForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>

      <CardSection>
        <Input
        label="Name"
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        />
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
