import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from 'react-native';

import {
  DrawerNavigator,
  DrawerItems,
} from 'react-navigation';


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <View>
        <Image
          source={require('../images/test.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      </View>
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}


class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <View>
        <Image
          source={require('../images/test.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      </View>

    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}


const MyFirstProject = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
      initialRouteName: 'Home', // 默认页面组件
      activeItemKey: 'Notifications',
      labelStyle: {//标签样式
        // color : 'red',
        height: 30,
      },
      activeTintColor: 'white',  // 选中文字颜色
      activeBackgroundColor: '#ff8500', // 选中背景颜色
      inactiveTintColor: '#666',  // 未选中文字颜色
      inactiveBackgroundColor: '#fff', // 未选中背景颜色
      style: {  // 样式
        marginVertical: 0,
      },
      //没有作用
      onItemPress: (route) => {
        console.log('-------->' + JSON.stringify(route))
      },

    },

    contentComponent: props => {
      console.log('contentComponent');
      console.log(props);
      return (
        <ScrollView>
          <View>
            <View style={{ paddingVertical: 20, paddingHorizontal: 15, backgroundColor: '#000' }}>
              <Text style={{ color: '#FFF' }}>抽屉导航...</Text>
            </View>
            <DrawerItems {...props} />
          </View>
        </ScrollView>
      )
    },
  });

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default MyFirstProject;
