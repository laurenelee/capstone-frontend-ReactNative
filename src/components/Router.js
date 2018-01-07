import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import UserForm from './UserForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="login" component={UserForm} title="Please fill in" />
    </Router>
  );
};

export default RouterComponent;
