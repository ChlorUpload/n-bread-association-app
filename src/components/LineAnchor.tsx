import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Typo from './Typo';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Color } from './Color';

export default class LineAnchor extends React.Component<Props> {
  render() {
    return (
      <View style={{ width: '100%', backgroundColor: 'black' }}>
        <TouchableNativeFeedback
          onPress={this.props.onPress}
          style={{
            width: '100%',
            height: 52,
            paddingLeft: 16,
            paddingRight: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Typo
              size="sm"
              textProps={{ numberOfLines: 1, ellipsizeMode: 'tail' }}
            >
              {this.props.title}
            </Typo>
            <Typo
              size="sm"
              textProps={{
                style: { color: Color.red, marginLeft: 5 },
              }}
            >
              {this.props.badge}
            </Typo>
          </View>
          <View
            style={{
              width: 24,
              height: 24,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!this.props.disableArrow && (
              <Ionicons name="ios-arrow-forward" size={18} color="lightgrey" />
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

type Props = {
  disableArrow?: boolean;
  badge?: number;
  title: string;
  onPress: () => void;
};
