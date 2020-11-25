import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';
import { ProductType, StateType } from '../State';
import ProductCard from '../components/ProductCard';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CombineAction from '../actions/CombineAction';

class HomeScreen extends React.Component<Props> {
  async componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <ScrollView>
        {this.props.products.map((p: ProductType, i) => (
          <ProductCard
            key={i}
            product={p}
            onPress={() => {
              this.props.navigation.navigate('Product', { productId: p.id });
            }}
          ></ProductCard>
        ))}
      </ScrollView>
    );
  }
}

type Props = StackScreenProps<StackParamList, 'Home'> & {
  products: ProductType[];
  fetchProducts: () => void;
};

export default connect(
  (state: StateType) => {
    return {
      products: state.product.products,
    };
  },
  (dispatch: Function) => {
    return {
      fetchProducts: () => {
        dispatch(CombineAction.fetchProductsThunk());
      },
    };
  },
)(HomeScreen);
