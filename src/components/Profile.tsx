import React from 'react';
import { connect } from 'react-redux';
import CombineAction from '../actions/CombineAction';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ProfileType, StateType } from '../State';
import { Color } from './Color';
import Typo from './Typo';

export default class Profile extends React.Component<Props> {
  render() {
    return (
      <View style={s.container}>
        <View style={s.row}>
          <Typo
            size="md"
            textProps={{
              style: {
                color: 'white',
                fontWeight: 'bold',
              },
            }}
          >
            {this.props.profile.name}
          </Typo>
          <Typo
            size="md"
            textProps={{
              style: {
                color: 'white',
              },
            }}
          >
            님, 안녕하세요!
          </Typo>
        </View>

        <Typo
          size="sm"
          textProps={{
            style: {
              color: 'white',
            },
          }}
        >{`N빵협회 DGIST점 회원`}</Typo>
      </View>
    );
  }
}

type Props = {
  profile: ProfileType;
};

const s = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Color.ltbrown,
    height: 90,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});
