import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Typo from './Typo';
import { ProductType } from '../State';
import { Color } from './Color';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default class ProductCard extends React.Component<Props> {
  render() {
    return (
      <View style={{ width: '100%' }}>
        <TouchableNativeFeedback onPress={() => {this.props.onPress()}} style={styles.cont}>
          <View style={styles.main}>
            <View style={styles.top}>
              {this.props.product.categories.map((category) => (
                <Typo
                  key={category.id}
                  size="xs"
                  textProps={{ style: { color: Color.brown } }}
                >{`#${category.title} `}</Typo>
              ))}
              <Typo size="xs" textProps={{ style: { color: 'grey' } }}>
                {`~${this.props.product.expiresAt.getFullYear()}-${
                  this.props.product.expiresAt.getMonth() + 1
                }-${this.props.product.expiresAt.getDate()}까지`}
              </Typo>
            </View>
            <View style={styles.mid}>
              <Typo
                size="lg"
                textProps={{ numberOfLines: 1, ellipsizeMode: 'tail' }}
              >
                {this.props.product.title}
              </Typo>
            </View>
            <View style={styles.bottom}>
              <View style={styles.row}>
                <Typo
                  size="md"
                  textProps={{ style: { fontWeight: 'bold' } }}
                >
                  {`${this.props.product.piecePrice}원`}
                </Typo>
                <Typo
                  size="xs"
                  textProps={{ style: { paddingLeft: 3, paddingTop: 6 } }}
                >
                  /1개
                </Typo>
              </View>
              <View style={styles.row}>
                <Typo
                  textProps={{
                    style: { fontSize: 9, paddingTop: 4.5, paddingRight: 5 },
                  }}
                >
                  모집
                </Typo>
                <Typo
                  size="sm"
                  textProps={{
                    style: { fontWeight: 'bold', color: Color.red },
                  }}
                >
                  {this.props.product.occupiedPiece}
                </Typo>
                <Typo size="sm" textProps={{ style: { fontWeight: 'bold' } }}>
                  {` / ${this.props.product.piece}`}
                </Typo>
              </View>
            </View>
          </View>
          <View style={styles.line}></View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

type Props = {
  product: ProductType;
  onPress: () => void;
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  line: {
    height: 1,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%',
    backgroundColor: 'lightgrey',
  },
  main: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
  },
  top: {
    flexDirection: 'row',
  },
  mid: {
    marginBottom: 8,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
});
