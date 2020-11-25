import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ProfileType, StateType } from '../State';
import CombineAction from '../actions/CombineAction';
import { Color } from '../components/Color';
import LineAnchor from '../components/LineAnchor';
import Profile from '../components/Profile';
import Padder from '../components/Padder';

class MoreScreen extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return (
      <View>
        <Profile profile={this.props.profile}></Profile>
        <Padder />
        <LineAnchor
          onPress={() => {
            this.props.navigation.navigate('Recent');
          }}
          title="최근 본 상품"
        ></LineAnchor>
        <Padder />
        <LineAnchor
          onPress={() => {
            this.props.navigation.navigate('Host');
          }}
          title="내가 올린 상품"
          badge={3}
        ></LineAnchor>
        <LineAnchor
          title="내가 참여한 상품"
          onPress={() => {
            this.props.navigation.navigate('Nonhost');
          }}
          badge={2}
        ></LineAnchor>
        <Padder />
        <LineAnchor
          onPress={() => {
            this.props.navigation.navigate('Setting');
          }}
          title="설정"
        ></LineAnchor>
      </View>
    );
  }
}

type Props = StackScreenProps<StackParamList, 'More'> & {
  profile: ProfileType;
  fetchProfile: () => void;
};

export default connect(
  (state: StateType) => {
    return {
      profile: state.auth.profile,
    };
  },
  (dispatch: Function) => {
    return {
      fetchProfile: () => {
        dispatch(CombineAction.fetchProfile());
      },
    };
  },
)(MoreScreen);
