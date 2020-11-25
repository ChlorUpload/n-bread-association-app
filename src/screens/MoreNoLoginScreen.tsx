import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';

export default class MoreNoLoginScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, MoreNoLogin!</Text>
      </View>
    );
  }
}

type Props = StackScreenProps<StackParamList, 'MoreNoLogin'>;
