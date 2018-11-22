
import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { createBottomTabNavigator, StackNavigator ,DrawerNavigator} from 'react-navigation';
import Home from '../pages/Home'
import Mine from '../pages/Mine'
import Setting from '../pages/Setting'
import Login from '../pages/Login'
import Mytest from '../pages/mytest'
import MineDetail from '../pages/MineDetail'


const Tab = createBottomTabNavigator({
  Mine: Mine,
  Home: Home,
  Mytest: Mytest,
});

const MainStack = StackNavigator(
  {//定义路由
    Tab:Tab,
    Mine: Mine,
    Login: Login,
    Setting: Setting,
  },
  {//定义配置
    initialRouteName: 'Tab',     //设置初始路由为Home
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'yellow'
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      title:'Mine123',
      headerLeft: (
        <Text>left</Text>
      ),
      headerRight: (
        <Text>right</Text>
      )
    }
  }
);

const RootStack = StackNavigator({
  Main: MainStack,
  MineDetail: MineDetail,
}, {
  mode: 'modal',
  headerMode: 'none',
}
)


export default class App extends Component {
  render() {                            //将Navigation作为根路径导出
    return <RootStack />;
  }
}
