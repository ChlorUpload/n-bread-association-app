import React from "react";
import { Text, View } from "react-native";
import Counter from "./components/Counter";

export default class Main extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello, Expo!</Text>
                <Counter></Counter>
            </View>
        );
    }
};