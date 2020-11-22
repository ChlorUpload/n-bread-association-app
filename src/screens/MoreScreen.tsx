import React from "react";
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Text, View } from "react-native";

export default class MoreScreen extends React.Component<Props> {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello, More!</Text>
                <Button title="Go to Settings" onPress={() => { this.props.navigation.navigate("Setting"); }}></Button>
            </View>
        )
    }
}

type Props = StackScreenProps<StackParamList, "More">