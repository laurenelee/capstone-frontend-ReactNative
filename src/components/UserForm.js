import React, { Component } from 'react';
import { View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class UserForm extends Component {
  render() {
    return (
      <Card>
      <CardSection />
      <CardSection />
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
