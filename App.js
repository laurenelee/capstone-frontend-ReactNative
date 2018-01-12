import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import Header from './src/components/header';
import AgencyList from './src/components/AgencyList';
import UserForm from './src/components/UserForm';
import Input from './src/components/Input';
import Wrapper from './src/components/Wrapper';

const App = () => (
  <View>
  <Header headerText={'Volunteer Agency'} />
  <Wrapper />
  </View>

);

export default App;
