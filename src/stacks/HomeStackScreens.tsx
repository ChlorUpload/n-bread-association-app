import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import CombineAction from '../actions/CombineAction';
import SearchScreen from '../screens/SearchScreen';
import { StateType } from '../State';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

export default class HomeStackScreen extends React.Component {
    render() {
      return (
        <HomeStack.Navigator>
          <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: 'N빵협회',
              headerTitleAlign: 'center',
            }}
          ></HomeStack.Screen>
        </HomeStack.Navigator>
      );
    }
  }