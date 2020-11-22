import React from "react";
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Text, View } from "react-native";

export default class SearchScreen extends React.Component<Props> {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello, Search!</Text>
            </View>
        )
    }
}

type Props = StackScreenProps<StackParamList, "Search">