import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import CombineAction from '../actions/CombineAction';
import SearchScreen from '../screens/SearchScreen';
import { StateType } from '../State';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import NoticeScreen from '../screens/NoticeScreen';
import MoreScreen from '../screens/MoreScreen';
import SettingScreen from '../screens/SettingScreen';

const MoreStack = createStackNavigator();

export default class MoreStackScreen extends React.Component {
  render() {
    return (
      <MoreStack.Navigator>
        <MoreStack.Screen
          name="More"
          component={MoreScreen}
          options={{
            headerTitle: '더보기',
          }}
        ></MoreStack.Screen>
        <MoreStack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: '설정',
          }}
        ></MoreStack.Screen>
      </MoreStack.Navigator>
    );
  }
}
