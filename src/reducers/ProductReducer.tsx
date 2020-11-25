import ActionSymbols from '../actions/ActionSymbols';
import { ProductActionType } from '../actions/ActionTypes';
import {
  SetCurrentSearchAction,
  SetProductsAction,
  SetSearchHistoriesAction,
  SetSearchResultsAction,
} from '../actions/ProductActions';
import * as StateTypes from '../State';
import { initialState } from './InitialState';

export default (
  state: StateTypes.ProductStateType = initialState.product,
  action: ProductActionType,
): StateTypes.ProductStateType => {
  switch (action.type) {
    case ActionSymbols.SET_PRODUCTS:
      return { ...state, products: (action as SetProductsAction).products };
    case ActionSymbols.SET_CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: (action as SetCurrentSearchAction).currentSearch,
      };
    case ActionSymbols.SET_SEARCH_HISTORY:
      return {
        ...state,
        searchHistories: (action as SetSearchHistoriesAction).searchHistories,
      };
    case ActionSymbols.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: (action as SetSearchResultsAction).searchResults,
      };
    default:
      return state;
  }
};
