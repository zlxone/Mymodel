import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';


export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Control Panel
        </Text>
        <Button style={styles.button}
          onPress={() => {
            this.drawer.close();
          }}
          title="Close Drawer"
        />
        <Text style={styles.controlPanelWelcome}>大江东去浪淘尽</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  controlPanel: {
    flex: 1,
    backgroundColor: 'gray',
  },
  controlPanelWelcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderColor: '#eeeeee',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa',
    marginRight: 20,
    marginLeft: 20,
    alignSelf: 'center',
  },
})