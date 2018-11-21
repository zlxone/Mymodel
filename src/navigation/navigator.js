
import React from 'react';
import {Text, View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from '../pages/Home'
import Mine from '../pages/Mine'
import Setting from '../pages/Setting'
import Login from '../pages/Login'
import Mytest from '../pages/mytest'


export default createBottomTabNavigator({
  Home: Home,
  Mytest: Mytest,
  Mine:Mine,
});

