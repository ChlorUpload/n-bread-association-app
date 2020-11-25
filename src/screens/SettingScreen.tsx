import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import Counter from '../components/Counter';
import LineAnchor from '../components/LineAnchor';
import Padder from '../components/Padder';

export default class SettingScreen extends React.Component<Props> {
  render() {
    return (
      <View>
        <Padder></Padder>
        <LineAnchor title="앱 정보" onPress={() => {}}></LineAnchor>
        <LineAnchor title="회원 정보 변경" onPress={() => {}}></LineAnchor>
        <Padder></Padder>
        <LineAnchor title="로그아웃" onPress={() => {}} disableArrow={true}></LineAnchor>
          <LineAnchor title="회원 탈퇴" onPress={() => {}} disableArrow={true}></LineAnchor>
      </View>
    );
  }
}

type Props = StackScreenProps<StackParamList, 'Setting'>;
