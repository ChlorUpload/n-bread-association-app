import IAction from './IAction';
import ActionSymbols from './ActionSymbols';
import { ProductType, StateType } from '../State';
import ServerService, { ResStatus } from '../services/ServerService';
import { nBreadAlert } from './ActionUtils';

/* Action and Action Creators */

export class SetProductsAction implements IAction {
  type: symbol = Symbol();
  products: ProductType[] = [];
}
function _setProducts(products: ProductType[]): SetProductsAction {
  return {
    type: ActionSymbols.SET_PRODUCTS,
    products,
  };
}

export class SetCurrentSearchAction implements IAction {
  type: symbol = Symbol();
  currentSearch: string = '';
}
function _setCurrentSearch(currentSearch: string): SetCurrentSearchAction {
  return {
    type: ActionSymbols.SET_CURRENT_SEARCH,
    currentSearch,
  };
}

export class SetSearchHistoriesAction implements IAction {
  type: symbol = Symbol();
  searchHistories: string[] = [];
}
function _setSearchHistory(
  searchHistories: string[],
): SetSearchHistoriesAction {
  return {
    type: ActionSymbols.SET_SEARCH_HISTORY,
    searchHistories,
  };
}

export class SetSearchResultsAction implements IAction {
  type: symbol = Symbol();
  searchResults: ProductType[] = [];
}
function _setSearchResults(
  searchResults: ProductType[],
): SetSearchResultsAction {
  return {
    type: ActionSymbols.SET_SEARCH_RESULTS,
    searchResults,
  };
}

export const fetchProductsThunk = () => async (
  dispatch: Function,
  getState: () => StateType,
) => {
  const res = await ServerService.fetchProducts();
  if (res.status == ResStatus.success) {
    dispatch(_setProducts(res.payload));
  } else {
    nBreadAlert(res);
  }
};

export const fetchSearchHistoriesThunk = () => async (
  dispatch: Function,
  getState: () => StateType,
) => {
  dispatch(_setSearchHistory(['생수', '햇반']));
};

export const searchThunk = (search: string) => async (
  dispatch: Function,
  getState: () => StateType,
) => {
  if (search === '') {
    return;
  }

  dispatch(_setSearchHistory([...getState().product.searchHistories, search]));
  dispatch(_setCurrentSearch(search));
  dispatch(
    _setSearchResults([(await ServerService.fetchProducts()).payload[0]]),
  );
};

export const clearSearchThunk = () => async (
  dispatch: Function,
  getState: () => StateType,
) => {
  dispatch(_setCurrentSearch(''));
};
