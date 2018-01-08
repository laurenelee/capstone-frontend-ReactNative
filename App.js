// 1 import library
// 2 create Component
// 3 render to device

/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

// 1 import library
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
// must provide a relative path to this next one bc we didnt create in npm
import Header from './src/components/header';
import AgencyList from './src/components/AgencyList';
import UserForm from './src/components/UserForm';
import Input from './src/components/Input';
import Wrapper from './src/components/Wrapper';
// import Router from './src/components/Router';

const App = () => (
  // to render another component within another (also note how header is self closing)
  <View>
  <Header headerText={'Volunteer Agency'} />
  <Wrapper />
  </View>

);



// sample starter code 1/3/18 commented out

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

export default App;
