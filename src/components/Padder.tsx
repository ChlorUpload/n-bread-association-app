import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Color } from './Color';

export default class Padder extends React.Component<Props> {
  render() {
    return <View style={styles.padder}></View>;
  }
}

type Props = {};

const styles = StyleSheet.create({
  padder: {
    width: '100%',
    height: 12,
    backgroundColor: 'transparent',
  },
});
