
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import Drawer from 'react-native-drawer'




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mytest!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});
