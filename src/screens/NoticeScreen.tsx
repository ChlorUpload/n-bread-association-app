import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import Counter from '../components/Counter';

export default class NoticeScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, Notice!</Text>
        <Counter></Counter>
      </View>
    );
  }
}

type Props = StackScreenProps<StackParamList, 'Notice'>;
