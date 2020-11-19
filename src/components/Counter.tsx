import React from 'react';
import { connect } from 'react-redux';
import CombineAction from '../actions/CombineAction';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StateType } from '../State';

class Counter extends React.Component<CountProps> {
    render() {
      return (
        <View style={s.container}>
          <Text allowFontScaling={false} style={{ fontSize: 20 }}>{this.props.count}</Text>
          <TouchableOpacity style={s.upButton} onPress={() => this.props.countUp(1)}>
            <Text allowFontScaling={false} style={{ fontSize: 20 }}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.upButton} onPress={() => this.props.countUp(2)}>
            <Text allowFontScaling={false} style={{ fontSize: 20 }}>+2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.downButton} onPress={() => this.props.countDown(1)}>
            <Text allowFontScaling={false} style={{ fontSize: 20 }}>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.downButton} onPress={() => this.props.countDown(2)}>
            <Text allowFontScaling={false} style={{ fontSize: 20 }}>-2</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  const s = StyleSheet.create({
    container: {
      marginTop: 30,
      flexDirection: 'row',
      alignItems: 'center'
    },
    upButton: {
      marginLeft: 20,
      backgroundColor: 'cyan',
      padding: 10,
      borderRadius: 20
    },
    downButton: {
      marginLeft: 20,
      backgroundColor: 'pink',
      padding: 10,
      borderRadius: 20
    },
  });
  
  type CountProps = {
    count: any;
    countUp: Function;
    countDown: Function;
  }

  function mapStateToProps(state: StateType) {
    return {
      count: state.count.count
    };
  }
  
  function mapDispatchToProps(dispatch: Function) {
    return {
      countUp: (num: number) => {
        dispatch(CombineAction.countUp(num));
      },
      countDown: (num: number) => {
        dispatch(CombineAction.countDown(num));
      }
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);