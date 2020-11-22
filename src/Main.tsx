import React from "react";
import { Text, View } from "react-native";
import Counter from "./components/Counter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator, StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native-paper";

import HomeScreen from "./screens/HomeScreen"
import SearchScreen from "./screens/SearchScreen"
import NoticeScreen from "./screens/NoticeScreen"
import MoreScreen from "./screens/MoreScreen"
import MoreNoLoginScreen from "./screens/MoreNoLoginScreen"
import SettingScreen from "./screens/SettingScreen";
import ProductScreen from "./screens/ProductScreen";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const NoticeStack = createStackNavigator();
const MoreStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class Main extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" 
                                  component={HomeTabScreen}
                                  options={{
                                      headerShown: false
                                  }}
                    ></Stack.Screen>
                    <Stack.Screen name="Product" component={ProductScreen}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};

class HomeTabScreen extends React.Component {
    render() {
        return (
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeStackScreen}></Tab.Screen>
                    <Tab.Screen name="Search" component={SearchStackScreen}></Tab.Screen>
                    <Tab.Screen name="Notice" component={NoticeStackScreen}></Tab.Screen>
                    {true ? <Tab.Screen name="More" component={MoreStackScreen}></Tab.Screen> :
                        <Tab.Screen name="MoreNoLogin" component={MoreNoLoginScreen}></Tab.Screen>
                    }
                </Tab.Navigator>
        );
    }
}

class HomeStackScreen extends React.Component {
    render() {
        return (
            <HomeStack.Navigator>
                <MoreStack.Screen name="Home" component={HomeScreen}></MoreStack.Screen>
            </HomeStack.Navigator>
        );
    }
}

class SearchStackScreen extends React.Component {
    render() {
        return (
            <SearchStack.Navigator>
                <SearchStack.Screen name="Search" component={SearchScreen}></SearchStack.Screen>
            </SearchStack.Navigator>
        );
    }
}

class NoticeStackScreen extends React.Component {
    render() {
        return (
            <NoticeStack.Navigator>
                <NoticeStack.Screen name="Notice" component={NoticeScreen}></NoticeStack.Screen>
            </NoticeStack.Navigator>
        );
    }
}

class MoreStackScreen extends React.Component {
    render() {
        return (
            <MoreStack.Navigator>
                <MoreStack.Screen name="More" component={MoreScreen}></MoreStack.Screen>
                <MoreStack.Screen name="Setting" component={SettingScreen}></MoreStack.Screen>
            </MoreStack.Navigator>
        );
    }
}