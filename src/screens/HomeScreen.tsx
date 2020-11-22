import React from "react";
import { StackScreenProps } from "@react-navigation/stack"
import { Text, View, Button } from "react-native";
import Counter from "../components/Counter"

export default class HomeScreen extends React.Component<Props> {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello, Home!</Text>
                <Counter></Counter>
                <Button title="Show Product Info" onPress={()=>{this.props.navigation.navigate("Product")}}></Button>
            </View>
        )
    }
}

type Props = StackScreenProps<StackParamList, "Home">