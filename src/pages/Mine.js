
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


class Logo extends React.Component {
  render() {
    return (
      <Text>Mine</Text>
      // <Image
      //     source={require('../images/test.png')}
      //     style={{ width: 50, height: 50 }}
      //     ></Image>
    )
  }
}

export default class App extends Component {

  // static navigationOptions = () => {
  //   return {
  //     headerTitle: <Logo />,
  //     title:'Mine123',
  //   }
  // }


  render() {
    return (
      <View style={styles.container}>
        <Text>Mine</Text>
        <View style={styles.content}>
          <Image
            style={{ resizeMode: 'contain', width: 200, height: 200 }}
            source={require('../images/test.png')}
          ></Image>

          <TouchableOpacity>
            <Text
              onPress={() => this.props.navigation.navigate('MineDetail', {
                text1: 'Mine',
                text2: '白日依山尽，黄河入海流。'
              })}
              style={{ backgroundColor: 'blue', width: 100, height: 30, textAlign: 'center', textAlignVertical: 'center', alignItems: 'center', color: 'white' }}
            >Go to Detail!</Text>
          </TouchableOpacity>

        </View>
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
  content: {
    marginTop: 10,
    width: width,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
