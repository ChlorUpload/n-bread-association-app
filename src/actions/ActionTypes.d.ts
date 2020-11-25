import { SetAccessTokenAction, SetProfileAction } from './AuthActions';
import { CountDownAction, CountUpAction } from './CountActions';
import { SetCurrentSearchAction, SetProductsAction, SetSearchHistoryAction, SetSearchResultsAction } from './ProductActions';

export type CountActionType = CountUpAction | CountDownAction;
export type ProductActionType = SetProductsAction | SetSearchHistoryAction | SetSearchResultsAction | SetCurrentSearchAction;
export type AuthActionType = SetAccessTokenAction | SetProfileAction;

/* combined action type */
export type CombineActionType = CountActionType | ProductActionType | AuthActionType;
