import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import CombineAction from '../actions/CombineAction';
import SearchScreen from '../screens/SearchScreen';
import { StateType } from '../State';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import NoticeScreen from '../screens/NoticeScreen';

const NoticeStack = createStackNavigator();

export default class NoticeStackScreen extends React.Component {
  render() {
    return (
      <NoticeStack.Navigator>
        <NoticeStack.Screen
          name="Notice"
          component={NoticeScreen}
          options={{
            headerTitle: '알림',
          }}
        ></NoticeStack.Screen>
      </NoticeStack.Navigator>
    );
  }
}
