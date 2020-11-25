import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Counter from '../components/Counter';

export default class NonhostScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello!</Text>
        <Counter></Counter>
      </View>
    );
  }
}

type Props = StackScreenProps<StackParamList, 'Nonhost'>;
