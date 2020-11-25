import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import MoreNoLoginScreen from './screens/MoreNoLoginScreen';
import ProductScreen from './screens/ProductScreen';
import RecentScreen from './screens/RecentScreen';
import HostScreen from './screens/HostScreen';
import NonhostScreen from './screens/NonhostScreen';
import { Color } from './components/Color';
import HomeStackScreen from './stacks/HomeStackScreens';
import SearchStackScreen from './stacks/SearchStackScreen';
import NoticeStackScreen from './stacks/NoticeStackScreen';
import MoreStackScreen from './stacks/MoreStackScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class Main extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTabScreen}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{
              title: '상품 상세 정보',
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Recent"
            component={RecentScreen}
            options={{ title: '최근 본 상품' }}
          ></Stack.Screen>
          <Stack.Screen
            name="Host"
            component={HostScreen}
            options={{ title: '내가 올린 상품' }}
          ></Stack.Screen>
          <Stack.Screen
            name="Nonhost"
            component={NonhostScreen}
            options={{ title: '내가 참여한 상품'}}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

class HomeTabScreen extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';

            if (Platform.OS === 'ios') {
              switch (route.name) {
                case 'Home':
                  iconName = 'ios-home';
                  break;
                case 'Search':
                  iconName = 'ios-search';
                  break;
                case 'Notice':
                  iconName = 'ios-notifications';
                  break;
                case 'More':
                  iconName = 'ios-more';
                  break;
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (Platform.OS === 'android') {
              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'Search':
                  iconName = 'search';
                  break;
                case 'Notice':
                  iconName = 'notifications';
                  break;
                case 'More':
                  iconName = 'more-horiz';
                  break;
              }

              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: Color.brown,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: '홈',
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Search"
          component={SearchStackScreen}
          options={{
            title: '검색',
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Notice"
          component={NoticeStackScreen}
          options={{
            title: '알림',
          }}
        ></Tab.Screen>
        {true ? (
          <Tab.Screen
            name="More"
            component={MoreStackScreen}
            options={{
              title: '더보기',
            }}
          ></Tab.Screen>
        ) : (
          <Tab.Screen
            name="MoreNoLogin"
            component={MoreNoLoginScreen}
            options={{
              title: '더보기',
            }}
          ></Tab.Screen>
        )}
      </Tab.Navigator>
    );
  }
}
