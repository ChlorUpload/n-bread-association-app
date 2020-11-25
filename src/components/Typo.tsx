import React from 'react';
import { View, Text, TextProps } from 'react-native';

const nameSize = {
  xs: 11,
  sm: 13,
  md: 17,
  lg: 19,
};

export default class Typo extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text
          {...(this.props.textProps,
          {
            allowFontScaling: false,
            style: [
              this.props?.textProps?.style ?? {},
              this.props.size && { fontSize: nameSize[this.props.size] },
            ],
          })}
        >
          {this.props.children}
        </Text>
      </View>
    );
  }
}

type Props = {
  size?: keyof typeof nameSize;
  textProps?: TextProps;
};
