import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { onChange } from 'react-native-reanimated';
import { NavigationProp } from '@react-navigation/native';
import { connect } from 'react-redux';
import { ProductType, StateType } from '../State';
import CombineAction from '../actions/CombineAction';
import ProductCard from '../components/ProductCard';

class SearchScreen extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchSearchHistory();
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>{this.props.currentSearch}에 대한 검색 결과</Text>
        {this.props.searchResults.map((p) => (
          <ProductCard key={p.id} product={p} onPress={() => {}}></ProductCard>
        ))}
        <View>
          {this.props.searchHistories.map((h, ind) => (
            <Text key={ind}>`{h}`</Text>
          ))}
        </View>
      </View>
    );
  }
}

type Props = StackScreenProps<StackParamList, 'Search'> & {
  fetchSearchHistory: () => void;

  currentSearch: string;
  searchHistories: string[];
  searchResults: ProductType[];
};

export default connect(
  (state: StateType) => {
    return {
      currentSearch: state.product.currentSearch,
      searchHistories: state.product.searchHistories,
      searchResults: state.product.searchResults,
    };
  },
  (dispatch: Function) => {
    return {
      fetchSearchHistory: () => {
        dispatch(CombineAction.fetchSearchHistoriesThunk());
      },
    };
  },
)(SearchScreen);

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
