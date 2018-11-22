import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import DrawerPanel from './DrawerPanel';


var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


class Logo extends React.Component {
  render() {
    return (
      <Text>Mine</Text>
    )
  }
}

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset: 100,
      closedDrawerOffset: 0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false,
      side: "left",
    };
  }

  render() {
    var controlPanel = <DrawerPanel closeDrawer={() => {
      this.drawer.close();
    }} />

    return (
      <Drawer
        ref={c => this.drawer = c}
        type='overlay'
        // animation={this.state.animation}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask}
        panCloseMask={this.state.panCloseMask}
        relativeDrag={this.state.relativeDrag}
        panThreshold={this.state.panThreshold}
        content={controlPanel}
        disabled={this.state.disabled}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        acceptDoubleTap={this.state.acceptDoubleTap}
        acceptTap={this.state.acceptTap}
        acceptPan={this.state.acceptPan}
        tapToClose={this.state.tapToClose}
        negotiatePan={this.state.negotiatePan}
        side="left"
      >
      


      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.drawer.open()}>
          <Text>Mine_drawer</Text>
        </TouchableOpacity>
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
      </Drawer>
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
    marginTop: 60,
    width: width,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
